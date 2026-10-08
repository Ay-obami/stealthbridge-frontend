import {notFound} from "next/navigation";
import {Workspace} from "@/components/workspace";
import type {Metadata} from "next";
export const dynamic="force-dynamic";
export const metadata:Metadata={robots:{index:false,follow:false},title:"Business integration preview | StealthBridge"};
export default function Page(){
 if(process.env.STEALTHBRIDGE_SITE_MODE!=="preview")notFound();
 return <Workspace mode="business"/>;
}
