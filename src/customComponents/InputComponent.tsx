import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

interface InputComponentProps {
  type?: string;
  placeholder: string;
  label: string;
  errorMessage?: string;
}

export function InputComponent({
  type,
  placeholder,
  label,
  errorMessage,
}: InputComponentProps) {
  return (
    <div className="grid w-full max-w-sm items-center gap-3 m-0">
      <Label className="text-amber-50">{label}</Label>
      <Input
        type={type}
        placeholder={placeholder}
        className="bg-stone-900 text-amber-50  border-0 placeholder:text-amber-50 p-2"
      />
      {errorMessage && <p className="text-red-">{errorMessage}</p>}
    </div>
  );
}
