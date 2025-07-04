import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { ComponentProps } from "react";

interface InputComponentProps extends ComponentProps<"input"> {
  type?: string;
  placeholder: string;
  label: string;
  errorMessage?: string;
  rightIcon?: React.ReactNode;
}

export function InputComponent({
  type,
  placeholder,
  label,
  errorMessage,
  rightIcon,
  ...rest
}: InputComponentProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-3 m-0">
      <Label className="text-amber-50 font-bold">{label}</Label>
      <div className="relative">
        <Input
          type={type}
          placeholder={placeholder}
          className="bg-stone-900 text-amber-50 border-0 placeholder:text-gray-400 placeholder:italic p-2 w-96 pr-10 rounded-[4px]"
          {...rest}
        />
        {rightIcon && (
          <span className="absolute inset-y-0 right-3 flex items-center cursor-pointer">
            {rightIcon}
          </span>
        )}
      </div>
      {errorMessage && (
        <p className="text-red-500 italic text-sm">{errorMessage}</p>
      )}
    </div>
  );
}
