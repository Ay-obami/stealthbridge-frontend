import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TransactionExplorer } from "@/components/transaction-explorer";
export const dynamic="force-dynamic";
export const metadata:Metadata={robots:{index:false,follow:false},title:"Transaction Explorer | StealthBridge",description:"Read-only Testnet verification."};
export default function Page(){
 if(process.env.STEALTHBRIDGE_SITE_MODE!=="preview")notFound();
 return <TransactionExplorer/>;
}
