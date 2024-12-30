import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Hero from "./home/Hero";
import ShowcaseGrid from "./showcase/ShowcaseGrid";
import FilterBar from "./home/FilterBar";

export default function Home() {
  return (
    <div className="space-y-8 py-16">
      <Hero />
      <FilterBar />
      <ShowcaseGrid />
    </div>
  );
}
