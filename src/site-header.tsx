export function SiteHeader() {
  return (
    <header className="flex border-b   pl-3">
      <h2 className=" bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
        Atmosly
      </h2>
      <div className="flex w-full items-center gap-1 px-4 lg:gap-2 lg:px-6">
        <div className="ml-auto flex items-center gap-2">
          {/* <Button variant="outline" size="sm">
            GitHub
          </Button> */}
        </div>
      </div>
    </header>
  );
}
