import * as React from "react";
import { cn } from "@/lib/utils";

export interface ButtonUnstyledProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const ButtonUnstyled = React.forwardRef<HTMLButtonElement, ButtonUnstyledProps>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={cn(className)}
        ref={ref}
        {...props}
      />
    );
  }
);

ButtonUnstyled.displayName = "ButtonUnstyled";

export { ButtonUnstyled };
