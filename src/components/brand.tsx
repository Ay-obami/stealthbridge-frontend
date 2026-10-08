import Link from "next/link";
export function Brand({compact=false}:{compact?:boolean}){
  return <Link href="/" aria-label="StealthBridge home" className="brand"><svg viewBox="0 0 64 64" role="img" aria-label="StealthBridge mark"><defs><linearGradient id="s-gradient" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stopColor="#1281b2"/><stop offset=".52" stopColor="#24e0dc"/><stop offset="1" stopColor="#7afab8"/></linearGradient></defs><path d="M49 8H32C19 8 13 17 13 25v4c8-7 17-8 26-8h4L23 36C12 44 10 50 7 56h20l28-22c6-5 4-13-3-15-6-1-14 0-19 4" fill="url(#s-gradient)"/><path d="M25 42c6 8 15 9 22 4 5-4 7-10 5-16L39 40c-5 3-9 3-14 2Z" fill="#61e7c5"/></svg>{!compact&&<span>Stealth<span className="brand-accent">Bridge</span></span>}</Link>
}
