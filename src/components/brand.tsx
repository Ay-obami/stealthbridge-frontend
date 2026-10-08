import Link from "next/link";
import Image from "next/image";

/** Canonical ribbon-shaped StealthBridge logo mark, adapted from the approved brand artwork. */
export function Brand({compact=false}:{compact?:boolean}){
  return <Link href="/" aria-label="StealthBridge home" className="brand">
    <Image src="/brand/stealthbridge-symbol.svg" alt="" aria-hidden="true" width={48} height={48} priority />
    {!compact&&<span>Stealth<span className="brand-accent">Bridge</span></span>}
  </Link>;
}
