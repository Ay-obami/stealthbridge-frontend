"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ArrowUpRight, ArrowRight, ShieldCheck, LockKeyhole, Globe2, Layers3, Menu, X, Sparkles } from "lucide-react";
import gsap from "gsap";
import { Brand } from "./brand";
import { Button } from "./ui/button";
const corridors=[{a:"Lagos",b:"Nairobi",code:"NG → KE",y:140},{a:"London",b:"Accra",code:"GB → GH",y:245},{a:"New York",b:"Manila",code:"US → PH",y:350}];
export function Home(){
 const root=useRef<HTMLDivElement>(null);
 const [mobileMenu,setMobileMenu]=useState(false);
 const [rail,setRail]=useState<"business"|"send">("business");
 useEffect(()=>{
  if(!root.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;
  const ctx=gsap.context(()=>{gsap.fromTo(".hero-reveal",{opacity:0,y:26},{opacity:1,y:0,stagger:.12,duration:.85,ease:"power3.out"});gsap.fromTo(".rail-drawing",{strokeDashoffset:260},{strokeDashoffset:0,duration:1.8,delay:.5,ease:"power2.out",stagger:.15});},root);
  return ()=>ctx.revert();
 },[]);
 return <div ref={root} className="page-frame">
 <div className="noise" aria-hidden="true"/>
 <header className="site-header container-wide"><Brand/><nav className={mobileMenu?"nav-links nav-open":"nav-links"} aria-label="Main navigation"><a href="#infrastructure" onClick={()=>setMobileMenu(false)}>Infrastructure</a><a href="#products" onClick={()=>setMobileMenu(false)}>Products</a><a href="#principles" onClick={()=>setMobileMenu(false)}>Security model</a><a href="https://github.com/stealthbridge-labs" target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={13}/></a></nav><div className="header-actions"><span className="network-chip"><i/>Stellar testnet</span><Link className="nav-cta" href="/business">Explore the platform <ArrowUpRight size={15}/></Link></div><button className="mobile-toggle" aria-label={mobileMenu?"Close navigation":"Open navigation"} onClick={()=>setMobileMenu(!mobileMenu)}>{mobileMenu?<X/>:<Menu/>}</button></header>
 <main>
 <section className="hero container-wide">
 <div className="hero-copy">
 <div className="hero-reveal kicker"><span className="signal-dot"/> The next layer of global settlement <span className="kicker-rule"/></div>
 <h1 className="hero-reveal">Move value.<br/><span className="quiet-title">Not exposure.</span></h1>
 <p className="hero-reveal hero-lead">Confidential payments for a world without financial borders. One privacy-first infrastructure for institutional settlements and everyday remittances.</p>
 <div className="hero-reveal hero-buttons"><Button size="lg" asChild><Link href="/business">Explore Business <ArrowUpRight size={17}/></Link></Button><Button size="lg" variant="outline" asChild><Link href="/send">Experience Send <ArrowRight size={17}/></Link></Button></div>
 <div className="hero-reveal hero-note"><ShieldCheck size={16}/><span>Testnet research preview. No real-value transfers.</span></div>
 </div>
 <div className="hero-art" aria-label="Illustrative confidential payment corridor visualization">
 <div className="ambient-halo"/>
 <div className="routing-board">
 <div className="board-top"><div><span className="board-eyebrow">Corridor intelligence</span><strong>Private settlement network</strong></div><span className="board-live"><span/> Preview</span></div>
 <div className="board-diagram">
 <div className="route-axis"><span>Origin</span><span>Privacy layer</span><span>Destination</span></div>
 <svg className="routing-svg" viewBox="0 0 580 370" preserveAspectRatio="xMidYMid meet" aria-hidden="true">
 <defs><linearGradient id="route" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#24d6c1" stopOpacity=".07"/><stop offset=".5" stopColor="#5df1d9"/><stop offset="1" stopColor="#70b8ff" stopOpacity=".24"/></linearGradient></defs>
 <path d="M0 175H580M0 90H580M0 260H580" stroke="#ffffff" strokeOpacity=".04"/>
 <ellipse cx="290" cy="181" rx="117" ry="145" fill="#2ae9c1" fillOpacity=".025" stroke="#69e5d2" strokeOpacity=".2" strokeDasharray="4 7"/>
 <path className="rail-drawing" d="M85 100C190 100 170 185 290 185S390 100 495 100" stroke="url(#route)" strokeWidth="2" fill="none" strokeDasharray="260"/>
 <path className="rail-drawing" d="M85 205C190 205 180 185 290 185S390 205 495 205" stroke="url(#route)" strokeWidth="2" fill="none" strokeDasharray="260"/>
 <path className="rail-drawing" d="M85 310C190 310 170 185 290 185S390 310 495 310" stroke="url(#route)" strokeWidth="2" fill="none" strokeDasharray="260"/>
 {[100,205,310].map((y)=><g key={y}><circle cx="85" cy={y} r="6" fill="#4de5ca"/><circle cx="85" cy={y} r="13" stroke="#4de5ca" strokeOpacity=".22" fill="none"/><circle cx="495" cy={y} r="6" fill="#80b9ff"/><circle cx="495" cy={y} r="13" stroke="#80b9ff" strokeOpacity=".22" fill="none"/></g>)}
 <circle cx="290" cy="185" r="37" fill="#062a31" stroke="#58edcf" strokeOpacity=".6"/><path d="M276 184l10 9 18-21" stroke="#67f1d8" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
 </svg>
 <div className="route-labels"><div>{corridors.map(c=><div key={c.code}><span>{c.a}</span><small>{c.code}</small></div>)}</div><div>{corridors.map(c=><div key={c.code}><span>{c.b}</span><small>Destination</small></div>)}</div></div>
 <div className="privacy-label"><LockKeyhole size={13}/> Protected route</div>
 </div>
 <div className="board-footer"><span><span className="tiny-orb"/> Confidentiality is designed in</span><span>Soroban · ZK</span></div>
 </div>
 <div className="floating-receipt"><div className="floating-icon"><LockKeyhole size={17}/></div><div><span>Settlement amount</span><strong>••••••••</strong></div><span className="receipt-tag">Protected</span></div>
 </div>
 </section>
 <section id="infrastructure" className="trust-strip"><div className="container-wide trust-inner"><span>Built for the privacy spectrum</span><strong>Confidential Tokens</strong><strong>Stellar Private Payments</strong><strong>Soroban / Rust</strong><strong>Stablecoin corridors</strong></div></section>
 <section id="products" className="products-section container-wide"><div className="section-heading"><div><span className="section-index">The platform</span><h2>One infrastructure.<br/>Two ways to move value.</h2></div><p>Purpose-built experiences for distinct privacy needs. Shared corridor orchestration beneath every transfer.</p></div>
 <div className="product-switch" role="tablist" aria-label="Product preview"><button role="tab" aria-selected={rail==="business"} onClick={()=>setRail("business")} className={rail==="business"?"selected":""}>Business settlement</button><button role="tab" aria-selected={rail==="send"} onClick={()=>setRail("send")} className={rail==="send"?"selected":""}>Personal remittance</button></div>
 <div className="product-feature"><div className="feature-text"><div className="feature-icon">{rail==="business"?<Layers3 size={24}/>:<Globe2 size={24}/>}</div><h3>{rail==="business"?"Confidentiality for business-critical payments.":"A quieter way to send money home."}</h3><p>{rail==="business"?"Keep settlement amounts and balances confidential between known counterparties. Track approval, finality, and payout as separate, auditable events.":"Protect payment amounts and relationships with shielded settlement where supported. A simple journey for sending, claiming and tracking remittances."}</p><Link href={rail==="business"?"/business":"/send"} className="text-link">Open {rail==="business"?"Business":"Send"} preview <ArrowUpRight size={17}/></Link></div><div className="feature-visual"><span className="diagram-caption">DESIGN PREVIEW / TESTNET</span><div className="demo-path"><div className="path-node"><span>{rail==="business"?"Institution A":"Sender"}</span><strong>Initiated</strong></div><div className="path-line"><i/><small>Privacy rail</small></div><div className="path-node shielded"><LockKeyhole/><span>Amount hidden</span></div><div className="path-line"><i/></div><div className="path-node"><span>{rail==="business"?"Institution B":"Recipient"}</span><strong>Verified</strong></div></div><div className="diagram-bottom"><span>Public ledger</span><span>Private payment data</span></div></div></div></section>
 <section id="principles" className="principles-section"><div className="container-wide"><div className="section-heading"><div><span className="section-index">Built with restraint</span><h2>Privacy you can reason about.</h2></div><p>No vague anonymity claims. Clear boundaries between private transactions, regulated fiat operations and public ledger data.</p></div><div className="principle-grid"><article><ShieldCheck/><h3>Auditable by design</h3><p>Transparent payment states, partner controls and scoped compliance evidence.</p></article><article><LockKeyhole/><h3>Protected where it matters</h3><p>Different privacy protocols for amounts and for counterparty relationships.</p></article><article><Sparkles/><h3>Interoperable from day one</h3><p>Versioned API contracts, replaceable adapters and independently deployable services.</p></article></div></div></section>
 <section className="closing-section container-wide"><div className="closing-panel"><div><span className="section-index">StealthBridge / research preview</span><h2>The future of payments<br/>doesn't need an audience.</h2></div><Button asChild size="lg"><Link href="/business">See the product preview <ArrowUpRight size={17}/></Link></Button></div></section>
 </main><footer className="site-footer container-wide"><Brand/><p>Confidential payments. Without borders.</p><span>© {new Date().getFullYear()} StealthBridge · Testnet research</span></footer>
 </div>;
}
