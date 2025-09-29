export function SiteHeader() {
  return (
    <div className="pl-16 pb-4 pt-4">
      <h2 className="bg-clip-text text-transparent text-left bg-gradient-to-b from-neutral-900 to-neutral-700 dark:from-neutral-600 dark:to-white text-5xl md:text-5xl lg:text-5xl font-sans py-2 md:py-4 relative z-20 font-bold tracking-tight">
        Atomsly : SpaceX Mission Explorer
      </h2>
      <p className=" text-sm font-light md:text-lg text-neutral-700 dark:text-neutral-400 text-left">
        Fetch real data from SpaceX API. Filter , explore and mark your favorite
      </p>
    </div>
  );
}
