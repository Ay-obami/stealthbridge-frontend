import {NextRequest,NextResponse} from "next/server";
export const dynamic="force-dynamic";
const allowed = new Set(["health","v1/network","v1/capabilities","v1/corridors"]);
export async function GET(_request:NextRequest,context:{params:Promise<{parts:string[]}>}){
 if(process.env.STEALTHBRIDGE_SITE_MODE!=="preview") return NextResponse.json({code:"PREVIEW_DISABLED"},{status:404});
 const {parts}=await context.params;
 const path=parts.join("/");
 if(!allowed.has(path) && !/^v1\/transactions\/[a-f0-9]{64}$/i.test(path) && !/^v1\/corridors\/[a-f0-9]{8}-(?:[a-f0-9]{4}-){3}[a-f0-9]{12}$/i.test(path)) return NextResponse.json({code:"NOT_FOUND"},{status:404});
 const base=process.env.STEALTHBRIDGE_API_URL;
 if(!base) return NextResponse.json({code:"API_UNCONFIGURED",message:"Configure STEALTHBRIDGE_API_URL on the frontend server."},{status:503});
 try{
  const url=new URL(base);
  if(!["https:","http:"].includes(url.protocol) || (url.protocol==="http:" && !["localhost","127.0.0.1"].includes(url.hostname))){
   return NextResponse.json({code:"INVALID_BACKEND_URL"},{status:503});
  }
  const destination=new URL(url.toString().replace(/\/$/,"")+"/"+path);
  const res=await fetch(destination,{method:"GET",headers:{accept:"application/json"},signal:AbortSignal.timeout(10000),cache:"no-store"});
  const body=await res.text();
  const headers={"cache-control":"no-store","content-type":res.headers.get("content-type")?.includes("json")?"application/json":"text/plain"};
  return new NextResponse(body,{status:res.status,headers});
 }catch{
  return NextResponse.json({code:"BACKEND_UNREACHABLE",message:"Unable to reach StealthBridge API."},{status:502,headers:{"cache-control":"no-store"}});
 }
}
