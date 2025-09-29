"use client";
import type { ColumnDef } from "@tanstack/react-table";
import { DetailsDialog } from "./dialog";
import { Badge } from "./components/ui/badge";
import { YearPicker } from "./components/ui/year-picker";
import FavoriteIcon from "./components/ui/fav";

interface Links {
  patch?: { small?: string | null; large?: string | null };
  reddit?: {
    campaign?: string | null;
    launch?: string | null;
    media?: string | null;
    recovery?: string | null;
  };
  flickr?: { small: string[]; original: string[] };
  presskit?: string | null;
  webcast?: string | null;
  youtube_id?: string | null;
  article?: string | null;
  wikipedia?: string | null;
}
export type Launches = {
  id: string;
  name: string;
  flight_number: number;
  date_utc: string;
  details?: string | null;
  success?: boolean | null;
  links: Links;
};

export const columns: ColumnDef<Launches>[] = [
  {
    accessorKey: "flight_number",
    header: () => <div className="text-left w-fit">Flight Number</div>,
    cell: ({ row }) => (
      <div className="text-left w-fit pl-4">{row.original.flight_number}</div>
    ),
  },
  {
    accessorKey: "name",
    header: () => <div className="text-left">Vehical Name</div>,
    cell: ({ row }) => <div className="text-left">{row.original.name}</div>,
  },
  {
    accessorKey: "date_utc",
    header: () => <div className="text-left">Flight Date</div>,
    cell: ({ row }) => {
      const date = new Date(row.original.date_utc);
      return <div className="text-left">{date.toLocaleDateString()}</div>;
    },
  },
  {
    accessorKey: "success",
    header: () => <div className="text-left w-fit">Flight Status</div>,
    cell: ({ row }) => (
      <div className="text-left">
        <Badge variant="outline" className="text-muted-foreground px-1.5">
          {row.original.success ? "Success" : "Failure"}
        </Badge>
      </div>
    ),
  },
  {
    id: "actions",
    header: () => <div className="text-left">Details</div>,
    cell: ({ row }) => (
      <div className="text-left">
        <DetailsDialog
          links={row.original.links}
          details={row.original.details}
        />
      </div>
    ),
  },
  {
    id: "id",
    header: () => <div className="text-left">Favorites</div>,
    cell: ({ row }) => (
      <div className="text-left">
        <FavoriteIcon id={row.original.id} />
      </div>
    ),
  },
];

// <Badge variant="outline" className="text-muted-foreground px-1.5">
//   {row.original.status === "Done" ? (
//     <IconCircleCheckFilled className="fill-green-500 dark:fill-green-400" />
//   ) : (
//     <IconLoader />
//   )}
//   {row.original.status}
// </Badge>;
