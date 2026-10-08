import Link from "next/link";
import {Brand} from "@/components/brand";
export default function NotFound(){
 return <div className="workspace-page" style={{minHeight:"100vh",display:"flex",flexDirection:"column"}}>
  <header className="workspace-header"><Brand/></header>
  <main id="main-content" className="container-wide" style={{flex:1,paddingBlock:"12vh"}}>
    <p className="section-index">StealthBridge / Development</p>
    <h1 style={{fontSize:"clamp(3rem,7vw,6rem)",letterSpacing:"-.07em",lineHeight:1.1}}>This experience isn’t public yet.</h1>
    <p className="hero-lead">Our frontend is being built in public. The Business, Send and Explorer workspaces will become available when their supported integrations are ready.</p>
    <p style={{marginTop:32}}><Link className="nav-cta" style={{display:"inline-flex"}} href="/">Return to StealthBridge ↗</Link></p>
  </main>
 </div>;
}
