import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";

const FilterBar = () => {
  return (
    <div className="container flex justify-between items-center">
      <Select defaultValue="popular">
        <SelectTrigger className="w-auto">
          <SelectValue placeholder="Select a city" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="popular">Popular</SelectItem>
          <SelectItem value="recent">Recent</SelectItem>
        </SelectContent>
      </Select>
      <div className="flex gap-2">
        <Badge size="large" type="pill" variant="secondary">
          All
        </Badge>
        <Badge size="large" type="pill" variant="muted">
          Districts
        </Badge>
        <Badge size="large" type="pill" variant="muted">
          Buildings
        </Badge>
        <Badge size="large" type="pill" variant="muted">
          Streets
        </Badge>
        <Badge size="large" type="pill" variant="muted">
          Parks
        </Badge>
      </div>
    </div>
  );
};

export default FilterBar;
