import type {Metadata} from "next";
import {TransactionExplorer} from "@/components/transaction-explorer";
export const metadata:Metadata={title:"Transaction Explorer | StealthBridge",description:"Verify actual Stellar Testnet transaction inclusion."};
export default function Page(){return <TransactionExplorer/>;}
