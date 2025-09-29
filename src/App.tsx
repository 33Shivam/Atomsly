import "./App.css";
import useSWR from "swr";
import { columns } from "./columns";
import type { Launches } from "./columns";
import { DataTable } from "./data-table";
import { SiteHeader } from "./site-header";
// import { YearPicker } from "./components/ui/year-picker";
import { Calendar } from "./components/ui/calendar";
import React from "react";
import { YearPicker } from "./components/ui/year-picker";

const API_URL = "https://api.spacexdata.com/v4/launches";

const fetcher = async <T,>(url: string): Promise<T> => {
  const res = await fetch(url);
  if (!res.ok) throw new Error("Failed to fetch data");
  return res.json();
};

function App() {
  const {
    data: launches,
    error,
    isLoading,
  } = useSWR<Launches[], Error>(API_URL, fetcher);

  if (isLoading) return <p>Loading SpaceX launches...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!launches) return <p>No data found</p>;
  return (
    <>
      <SiteHeader />
      <div className="border rounded-lg p-6 mt-4 ml-8 mr-8 mb-4">
        <DataTable columns={columns} data={launches} />
      </div>
    </>
  );
}

export default App;
