<<<<<<< HEAD
"use client";
=======
"use client"
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

import {
  Toast,
  ToastClose,
  ToastDescription,
  ToastProvider,
  ToastTitle,
  ToastViewport,
<<<<<<< HEAD
} from "@/components/ui/toast";
import { useToast } from "@/components/ui/use-toast";

export function Toaster() {
  const { toasts } = useToast();
=======
} from "@/components/ui/toast"
import { useToast } from "@/components/ui/use-toast"

export function Toaster() {
  const { toasts } = useToast()
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

  return (
    <ToastProvider>
      {toasts.map(function ({ id, title, description, action, ...props }) {
        return (
          <Toast key={id} {...props}>
            <div className="grid gap-1">
              {title && <ToastTitle>{title}</ToastTitle>}
              {description && (
                <ToastDescription>{description}</ToastDescription>
              )}
            </div>
            {action}
            <ToastClose />
          </Toast>
<<<<<<< HEAD
        );
      })}
      <ToastViewport />
    </ToastProvider>
  );
=======
        )
      })}
      <ToastViewport />
    </ToastProvider>
  )
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
}
