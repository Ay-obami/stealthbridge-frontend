"use client";
import {useState} from "react";
import {getNetwork,isConnected,requestAccess} from "@stellar/freighter-api";
import {Wallet,AlertTriangle,CheckCircle2} from "lucide-react";
import {Button} from "@/components/ui/button";

const TESTNET_PASSPHRASE = "Test SDF Network ; September 2015";

export function WalletConnect(){
 const [address,setAddress]=useState<string|null>(null);
 const [network,setNetwork]=useState<string|null>(null);
 const [pending,setPending]=useState(false);
 const [error,setError]=useState<string|null>(null);
 const correct=network===TESTNET_PASSPHRASE;
 const connect=async()=>{
  setPending(true);setError(null);
  try{
   const installed=await isConnected();
   if(installed.error || !installed.isConnected) throw new Error("Freighter is not available. Install the wallet extension before connecting.");
   const access=await requestAccess();
   if(access.error || !access.address) throw new Error(access.error?.message||"Wallet access was not granted.");
   const info=await getNetwork();
   if(info.error) throw new Error(info.error.message);
   const passphrase=info.networkPassphrase??"";
   setNetwork(passphrase);
   setAddress(access.address);
   if(passphrase!==TESTNET_PASSPHRASE) setError("Switch Freighter to Stellar Testnet. StealthBridge cannot use another network.");
  }catch(e){setError(e instanceof Error?e.message:"Unable to connect wallet.");setAddress(null);setNetwork(null);}
  finally{setPending(false);}
 };
 return <div className="wallet-section">
 <div className="wallet-top"><div><h3>Wallet authorization</h3><p>Freighter connection uses your wallet extension. No secret keys enter StealthBridge.</p></div><Wallet size={23} aria-hidden/></div>
 {address&&correct?<div className="wallet-connected"><CheckCircle2 aria-hidden size={18}/><div><strong>Connected on Testnet</strong><code title={address}>{address}</code></div></div>:null}
 <Button variant="outline" disabled={pending} onClick={connect} type="button">{pending?"Connecting…":address?"Recheck wallet":"Connect Freighter"}</Button>
 {error?<p className="wallet-error" role="alert"><AlertTriangle size={15} aria-hidden/>{error}</p>:null}
 </div>;
}
