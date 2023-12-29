<<<<<<< HEAD
import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";
import { Slot } from "@radix-ui/react-slot";
=======
import * as React from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { Slot } from '@radix-ui/react-slot';
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
import {
  Controller,
  ControllerProps,
  FieldPath,
  FieldValues,
  FormProvider,
  useFormContext,
<<<<<<< HEAD
} from "react-hook-form";

import { cn } from "@/lib/utils";
import { Label } from "@/components/ui/label";
=======
} from 'react-hook-form';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label';
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

const Form = FormProvider;

type FormFieldContextValue<
  TFieldValues extends FieldValues = FieldValues,
<<<<<<< HEAD
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
=======
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
> = {
  name: TName;
};

const FormFieldContext = React.createContext<FormFieldContextValue>(
<<<<<<< HEAD
  {} as FormFieldContextValue,
=======
  {} as FormFieldContextValue
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
);

const FormField = <
  TFieldValues extends FieldValues = FieldValues,
<<<<<<< HEAD
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>,
=======
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
>({
  ...props
}: ControllerProps<TFieldValues, TName>) => {
  return (
    <FormFieldContext.Provider value={{ name: props.name }}>
      <Controller {...props} />
    </FormFieldContext.Provider>
  );
};

const useFormField = () => {
  const fieldContext = React.useContext(FormFieldContext);
  const itemContext = React.useContext(FormItemContext);
  const { getFieldState, formState } = useFormContext();

  const fieldState = getFieldState(fieldContext.name, formState);

  if (!fieldContext) {
<<<<<<< HEAD
    throw new Error("useFormField should be used within <FormField>");
=======
    throw new Error('useFormField should be used within <FormField>');
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
  }

  const { id } = itemContext;

  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState,
  };
};

type FormItemContextValue = {
  id: string;
};

const FormItemContext = React.createContext<FormItemContextValue>(
<<<<<<< HEAD
  {} as FormItemContextValue,
=======
  {} as FormItemContextValue
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
);

const FormItem = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const id = React.useId();

  return (
    <FormItemContext.Provider value={{ id }}>
      <div ref={ref} className={className} {...props} />
    </FormItemContext.Provider>
  );
});
<<<<<<< HEAD
FormItem.displayName = "FormItem";
=======
FormItem.displayName = 'FormItem';
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

const FormLabel = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root>
>(({ className, ...props }, ref) => {
  const { error, formItemId } = useFormField();

  return (
    <Label ref={ref} className={className} htmlFor={formItemId} {...props} />
  );
});
<<<<<<< HEAD
FormLabel.displayName = "FormLabel";
=======
FormLabel.displayName = 'FormLabel';
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

const FormControl = React.forwardRef<
  React.ElementRef<typeof Slot>,
  React.ComponentPropsWithoutRef<typeof Slot>
>(({ ...props }, ref) => {
  const { error, formItemId, formDescriptionId, formMessageId } =
    useFormField();

  return (
    <Slot
      ref={ref}
      id={formItemId}
      aria-describedby={
        !error
          ? `${formDescriptionId}`
          : `${formDescriptionId} ${formMessageId}`
      }
      aria-invalid={!!error}
      {...props}
    />
  );
});
<<<<<<< HEAD
FormControl.displayName = "FormControl";
=======
FormControl.displayName = 'FormControl';
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

const FormDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => {
  const { formDescriptionId } = useFormField();

  return (
    <p
      ref={ref}
      id={formDescriptionId}
<<<<<<< HEAD
      className={cn("text-sm text-muted-foreground", className)}
=======
      className={cn('text-sm text-muted-foreground', className)}
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
      {...props}
    />
  );
});
<<<<<<< HEAD
FormDescription.displayName = "FormDescription";
=======
FormDescription.displayName = 'FormDescription';
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

const FormMessage = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, children, ...props }, ref) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;

  if (!body) {
    return null;
  }

  return (
    <p
      ref={ref}
      id={formMessageId}
<<<<<<< HEAD
      className={cn("text-sm font-medium text-destructive", className)}
=======
      className={cn('text-sm font-medium text-destructive', className)}
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4
      {...props}
    >
      {body}
    </p>
  );
});
<<<<<<< HEAD
FormMessage.displayName = "FormMessage";
=======
FormMessage.displayName = 'FormMessage';
>>>>>>> ee4bb081974ac7f2dcb473ed7e3ff1d46ae2c8e4

export {
  useFormField,
  Form,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormField,
};
