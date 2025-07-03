import {
  FormControl,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import type { Game } from "@/types/gamesTypes";
import type { ControllerRenderProps } from "react-hook-form";

interface CustomSelectProps extends ControllerRenderProps {
  data: Game[];
  placeholder: string;
  label: string;
}

export function CustomSelect(props: CustomSelectProps) {
  return (
    <FormItem>
      <FormLabel className="text-zinc-50">{props.label}</FormLabel>
      <Select onValueChange={props.onChange} defaultValue={props.value}>
        <FormControl>
          <SelectTrigger className="w-full bg-stone-900 border-none text-zinc-50">
            <SelectValue placeholder={props.placeholder} />
          </SelectTrigger>
        </FormControl>
        <SelectContent>
          {props.data.map((game) => (
            <SelectItem key={game.id} value={game.id.toString()}>
              {game.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <FormMessage />
    </FormItem>
  );
}
