"use client";

import * as React from "react";
import { Calendar } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function YearPicker({
  fromYear = 2006,
  toYear = 2025,
  onChange,
}: {
  fromYear?: number;
  toYear?: number;
  value?: string;
  onChange?: (year: string) => void;
}) {
  const [year, setYear] = React.useState("");

  const years = Array.from({ length: toYear - fromYear + 1 }, (_, i) =>
    (fromYear + i).toString()
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          <Calendar />
          <span>{year == "" ? "All Years" : year}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Filter Year</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={year}
          onValueChange={(val) => {
            setYear(val);
            onChange?.(val);
          }}
        >
          {years.map((y) => (
            <DropdownMenuRadioItem key={y} value={y}>
              {y}
            </DropdownMenuRadioItem>
          ))}
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
