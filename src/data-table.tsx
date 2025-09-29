"use client";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { LucideSearch } from "lucide-react";

import type { ColumnDef, ColumnFiltersState } from "@tanstack/react-table";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import React from "react";
import { YearPicker } from "./components/ui/year-picker";

interface DataTableProps<TData extends HasId, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
}

interface HasId {
  id?: string;
}
export function DataTable<TData extends HasId, TValue>({
  columns,
  data,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  );
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    state: { columnFilters },
  });

  return (
    <div>
      <div className="flex items-center py-4 justify-between">
        <div className="relative max-w-sm">
          <Input
            id="search-mission"
            placeholder="Search Mission Name"
            value={(table.getColumn("name")?.getFilterValue() as string) ?? ""}
            onChange={(event) =>
              table.getColumn("name")?.setFilterValue(event.target.value)
            }
            className="w-full pr-10 bg-gray-800 text-white placeholder-gray-400 rounded-none uppercase "
          />
          <LucideSearch
            className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            size={16}
          />
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <Switch
              id="Successful-Only"
              onCheckedChange={(checked) => {
                table
                  .getColumn("success")
                  ?.setFilterValue(checked ? true : null);
              }}
            />
            <Label htmlFor="Successful-Only">Successful Only</Label>
            <YearPicker
              fromYear={2006}
              toYear={2025}
              onChange={(year) => {
                table.getColumn("date_utc")?.setFilterValue(year ? year : null);
              }}
            />
            <Button variant={"link"} onClick={() => table.resetColumnFilters()}>
              Clear Filters
            </Button>
          </div>
        </div>
      </div>
      <div className=" rounded-md border ">
        <Table className="bg-black text-white font-mono border-gray-800">
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow
                key={headerGroup.id}
                className="uppercase tracking-widest text-sm text-gray-400"
              >
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                  className="hover:bg-gray-900 transition border-b border-gray-800 uppercase"
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id} className=" py-4">
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={columns.length} className="h-24">
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <Button
          variant={"outline"}
          size="sm"
          onClick={() => table.previousPage()}
          disabled={!table.getCanPreviousPage()}
        >
          Previous
        </Button>
        <Button
          variant={"outline"}
          size="sm"
          onClick={() => table.nextPage()}
          disabled={!table.getCanNextPage()}
        >
          Next
        </Button>
      </div>
    </div>
  );
}
