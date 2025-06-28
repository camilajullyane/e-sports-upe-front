import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ChevronRight } from "lucide-react";

interface CustomBreadCrumbsProps {
  path: string;
}

export function CustomBreadCrumbs({ path }: CustomBreadCrumbsProps) {
  const pathList = path.split("/").slice(1);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        <BreadcrumbItem>{pathList[0]}</BreadcrumbItem>
        {pathList.slice(1).map((item) => (
          <>
            <BreadcrumbSeparator>
              <ChevronRight className="text-zinc-50" />
            </BreadcrumbSeparator>
            <BreadcrumbItem key={item}>{item}</BreadcrumbItem>
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
