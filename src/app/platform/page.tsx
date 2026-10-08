import type {Metadata} from "next";
import {ProductStory} from "@/components/product-story";
export const metadata:Metadata={
 title:"The StealthBridge Platform | Privacy-conscious payment infrastructure",
 description:"Explore the thinking and architecture behind StealthBridge Business, Send and our shared Stellar foundation."
};
export default function Page(){return <ProductStory product="platform"/>;}
