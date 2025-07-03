import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { FormControl, FormItem, FormLabel } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { CalendarIcon } from "lucide-react";
import type { ControllerRenderProps } from "react-hook-form";

interface DatePickerProps extends ControllerRenderProps {
  label: string;
}

export function DatePicker(props: DatePickerProps) {
  return (
    <div className="flex flex-col gap-3 w-full">
      <FormItem className="flex flex-col">
        <FormLabel className="text-zinc-50">{props.label}</FormLabel>
        <Popover>
          <PopoverTrigger
            asChild
            className="bg-stone-900 border-none text-zinc-50 w-full"
          >
            <FormControl className="w-full">
              <Button
                variant={"outline"}
                className={cn(
                  "pl-3 text-left font-normal",
                  !props.value && "text-muted-foreground"
                )}
              >
                {props.value ? (
                  format(props.value, "PPP", { locale: ptBR })
                ) : (
                  <span>Selecione uma data</span>
                )}
                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
              </Button>
            </FormControl>
          </PopoverTrigger>
          <PopoverContent className="w-auto p-0" align="start">
            <Calendar
              mode="single"
              selected={props.value}
              onSelect={props.onChange}
              disabled={(date) =>
                date < new Date() || date < new Date("1900-01-01")
              }
              captionLayout="dropdown"
              locale={ptBR}
            />
          </PopoverContent>
        </Popover>
      </FormItem>
    </div>
  );
}
