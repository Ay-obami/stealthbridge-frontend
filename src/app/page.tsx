import { Home } from "@/components/home";
export default function Page(){
 return <Home previewEnabled={process.env.STEALTHBRIDGE_SITE_MODE==="preview"}/>;
}
