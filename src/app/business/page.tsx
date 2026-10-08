import type {Metadata} from "next";
import {ProductStory} from "@/components/product-story";
export const metadata:Metadata={
 title:"StealthBridge Business | Confidential cross-border settlements",
 description:"Discover StealthBridge Business, our vision for more private and accountable international institutional settlement."
};
export default function Page(){return <ProductStory product="business"/>;}
