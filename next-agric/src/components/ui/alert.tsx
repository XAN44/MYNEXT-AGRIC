<<<<<<< HEAD
import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";
=======
import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

const alertVariants = cva(
  "relative w-full rounded-lg border px-4 py-3 text-sm [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground [&>svg~*]:pl-7",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground",
        destructive:
          "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: {
      variant: "default",
    },
<<<<<<< HEAD
  },
);
=======
  }
)
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

const Alert = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement> & VariantProps<typeof alertVariants>
>(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
<<<<<<< HEAD
));
Alert.displayName = "Alert";
=======
))
Alert.displayName = "Alert"
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

const AlertTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
<<<<<<< HEAD
));
AlertTitle.displayName = "AlertTitle";
=======
))
AlertTitle.displayName = "AlertTitle"
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
<<<<<<< HEAD
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };
=======
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
