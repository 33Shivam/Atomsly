import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { ExternalLink } from "lucide-react";

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
interface DetailsDialogProps {
  details?: string | null;
  links: Links;
}
export function DetailsDialog({ details, links }: DetailsDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"ghost"} size="sm">
          <ExternalLink />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Launch Details</DialogTitle>
          <DialogDescription>
            {details || "No additional details."}
          </DialogDescription>
        </DialogHeader>

        <div className="mt-4 flex flex-col gap-2">
          {links.patch?.small && (
            <div className="flex justify-center">
              <img
                src={links.patch.small}
                alt="Launch Patch"
                className="w-24 h-24"
              />
            </div>
          )}

          {links.webcast && (
            <a
              href={links.webcast}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Watch Webcast
            </a>
          )}
          {links.article && (
            <a
              href={links.article}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Read Article
            </a>
          )}
          {links.wikipedia && (
            <a
              href={links.wikipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Wikipedia
            </a>
          )}
          {links.presskit && (
            <a
              href={links.presskit}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              Presskit
            </a>
          )}
        </div>

        <DialogFooter className="sm:justify-start mt-4">
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
