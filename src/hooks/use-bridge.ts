"use client";
import {useCallback,useEffect,useState} from "react";
import {readBridge,type Capabilities,type Corridor,type NetworkStatus} from "@/lib/bridge-api";

type Remote<T> = { data: T | null; error: string | null; loading: boolean };
const initial = <T,>():Remote<T>=>({data:null,error:null,loading:true});
const errorText=(e:unknown)=> e instanceof Error?e.message:"The request failed.";
export function useBridge() {
  const [network,setNetwork]=useState<Remote<NetworkStatus>>(initial());
  const [corridors,setCorridors]=useState<Remote<Corridor[]>>(initial());
  const [capabilities,setCapabilities]=useState<Remote<Capabilities>>(initial());
  const [revision,setRevision]=useState(0);
  const refresh=useCallback(()=>setRevision(n=>n+1),[]);
  useEffect(()=>{
    const controller=new AbortController();
    const load=<T,>(key:"network"|"corridors"|"capabilities",update:(r:Remote<T>)=>void)=>{
      update({data:null,error:null,loading:true});
      readBridge<T>(key,controller.signal)
        .then(data=>{if(!controller.signal.aborted)update({data,error:null,loading:false});})
        .catch(e=>{if(!controller.signal.aborted)update({data:null,error:errorText(e),loading:false});});
    };
    load("network",setNetwork);
    load("corridors",setCorridors);
    load("capabilities",setCapabilities);
    return ()=>controller.abort();
  },[revision]);
  return {network,corridors,capabilities,refresh};
}
