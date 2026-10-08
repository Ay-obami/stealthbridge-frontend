import type {Metadata} from "next";
import {ProductStory} from "@/components/product-story";
export const metadata:Metadata={
 title:"StealthBridge Send | A more thoughtful way to send",
 description:"Meet StealthBridge Send, a future remittance experience centered on privacy, clarity and people."
};
export default function Page(){return <ProductStory product="send"/>;}
