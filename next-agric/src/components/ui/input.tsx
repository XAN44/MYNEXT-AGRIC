<<<<<<< HEAD
import * as React from "react";

import { cn } from "@/lib/utils";
=======
import * as React from "react"

import { cn } from "@/lib/utils"
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
<<<<<<< HEAD
          className,
=======
          className
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
        )}
        ref={ref}
        {...props}
      />
<<<<<<< HEAD
    );
  },
);
Input.displayName = "Input";

export { Input };
=======
    )
  }
)
Input.displayName = "Input"

export { Input }
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
