import { LoaderCircle } from "lucide-react";

export function CircularProgress() {
  return (
    <div>
      <LoaderCircle size="2.4rem" color="#fff" className="animate-spin" />
    </div>
  );
}
