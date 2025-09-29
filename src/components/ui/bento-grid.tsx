import { cn } from "@/lib/utils";
import { DetailsDialog } from "@/dialog";
import FavoriteIcon from "./fav";
import { Badge } from "./badge";
export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid  grid-cols-1 gap-4 md:auto-rows-[10rem] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};
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

export const BentoGridItem = ({
  className,
  name,
  date,
  year,
  detailsUrl,
  id,
  links,
  tbd,
}: {
  className?: string;
  name?: string;
  date?: string;
  year?: string | number;
  detailsUrl?: string;
  id: string;
  links: Links;
  tbd?: boolean;
}) => {
  return (
    <div
      className={cn(
        "group/bento shadow-input row-span-1 flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className
      )}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-2 transition duration-200 group-hover/bento:translate-x-2">
          <h3 className=" text-xl font-regular ">{name}</h3>
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {date}
          </div>
          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            <Badge
              variant="outline"
              className="text-muted-foreground px-1.5 rounded-4xl"
            >
              {year}
            </Badge>
          </div>
          {tbd ? (
            <div className="text-left">
              <Badge
                variant="outline"
                className="text-muted-foreground px-1.5 rounded-4xl"
              >
                tbd
              </Badge>
            </div>
          ) : (
            ""
          )}
          <div className="text-left">
            <DetailsDialog links={links} details={detailsUrl} />
          </div>
        </div>
        <div className="text-left">
          <FavoriteIcon id={id} />
        </div>
      </div>
    </div>
  );
};
