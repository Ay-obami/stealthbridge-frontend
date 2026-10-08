import Link from "next/link";
import {Brand} from "@/components/brand";
export default function NotFound(){
 return <div className="workspace-page" style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}>
  <header className="workspace-header"><Brand/></header>
  <main id="main-content" className="container-wide" style={{flex:1,paddingBlock:"12vh"}}>
   <p className="section-index">StealthBridge / What's next</p>
   <h1 style={{fontSize:"clamp(3rem,7vw,6rem)",letterSpacing:"-.07em",lineHeight:1.1}}>Something new is taking shape.</h1>
   <p className="hero-lead">This experience is not available yet. Discover what we're building for businesses and people moving value across borders.</p>
   <p style={{display:"flex",gap:16,flexWrap:"wrap",marginTop:32}}>
    <Link className="nav-cta" style={{display:"inline-flex"}} href="/business">StealthBridge Business ↗</Link>
    <Link className="nav-cta" style={{display:"inline-flex"}} href="/send">StealthBridge Send ↗</Link>
    <Link className="nav-cta" style={{display:"inline-flex"}} href="/">Back to home ↗</Link>
   </p>
  </main>
 </div>;
}
