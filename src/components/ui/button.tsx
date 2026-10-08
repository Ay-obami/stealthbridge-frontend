import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
const variants = cva("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-teal-300 disabled:pointer-events-none disabled:opacity-50", {
  variants: { variant: { primary: "bg-[#8cfce6] text-[#051d21] hover:bg-white", outline: "border border-white/20 text-white hover:bg-white/10", ghost: "text-white/75 hover:text-white hover:bg-white/10" }, size: { default: "h-11 px-5", lg: "h-12 px-7", icon: "h-10 w-10" } },
  defaultVariants: { variant: "primary", size: "default" }
});
export function Button({ asChild=false, variant, size, className, ...props }: React.ComponentProps<"button"> & VariantProps<typeof variants> & {asChild?:boolean}) {
 const Comp = asChild ? Slot : "button";
 return <Comp data-slot="button" className={cn(variants({variant,size}),className)} {...props} />;
}
