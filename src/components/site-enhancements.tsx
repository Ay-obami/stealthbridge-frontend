"use client";
import {useEffect,useState} from "react";
import {ArrowUp} from "lucide-react";

/** Small opt-out-aware navigation aid, shared across product stories. */
export function SiteEnhancements(){
 const [percent,setPercent]=useState(0);
 const [visible,setVisible]=useState(false);
 useEffect(()=>{
  let scheduled=false;
  let frame=0;
  function update(){
   const doc=document.documentElement;
   const total=Math.max(1,doc.scrollHeight-window.innerHeight);
   const top=Math.max(0,window.scrollY);
   setPercent(Math.min(100,(top/total)*100));
   setVisible(top>600);
   scheduled=false;
  }
  function onScroll(){
   if(!scheduled){scheduled=true;frame=requestAnimationFrame(update);}
  }
  update();
  window.addEventListener("scroll",onScroll,{passive:true});
  window.addEventListener("resize",onScroll,{passive:true});
  return ()=>{window.removeEventListener("scroll",onScroll);window.removeEventListener("resize",onScroll);cancelAnimationFrame(frame);};
 },[]);
 const backToTop=()=>{
  const reduced=window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  window.scrollTo({top:0,behavior:reduced?"instant":"smooth"});
 };
 return <>
  <div className="reading-track" aria-hidden="true"><div className="reading-progress" style={{width:percent+"%"}}/></div>
  <button type="button" className={"back-to-top"+(visible?" is-visible":"")} onClick={backToTop} aria-label="Back to top" tabIndex={visible?0:-1} aria-hidden={!visible}>
   <ArrowUp size={19} aria-hidden="true"/>
  </button>
 </>;
}
