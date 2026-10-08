import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Workspace } from "@/components/workspace";
export const dynamic="force-dynamic";
export const metadata:Metadata={robots:{index:false,follow:false},title:"Business | StealthBridge"};
export default function Page(){
 if(process.env.STEALTHBRIDGE_SITE_MODE!=="preview")notFound();
 return <Workspace mode="business"/>;
}
