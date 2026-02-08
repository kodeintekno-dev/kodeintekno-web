import { cn } from "@/lib/utils";
import type { ComponentProps } from "react";

export default function Section({
  children,
  className,
  ...props
}: ComponentProps<"div">) {
  return (
    <div
      className={cn("bg-white border border-black/10 rounded-lg", className)}
      {...props}
    >
      {children}
    </div>
  );
}
