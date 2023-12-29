<<<<<<< HEAD
import * as React from "react";

import { cn } from "@/lib/utils";
=======
import * as React from "react"

import { cn } from "@/lib/utils"
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
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
Textarea.displayName = "Textarea";

export { Textarea };
=======
    )
  }
)
Textarea.displayName = "Textarea"

export { Textarea }
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
