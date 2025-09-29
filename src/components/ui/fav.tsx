"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Heart } from "lucide-react"; // Lucide icons
import { Label } from "@/components/ui/label";

interface FavoriteIconProps {
  id: string;
}

export default function FavoriteIcon({ id }: FavoriteIconProps) {
  const [favorites, saveFavorites] = useLocalStorage<string[]>("favorites", []);

  const isFavorite = favorites.includes(id);

  const toggleFavorite = () => {
    if (isFavorite) {
      saveFavorites(favorites.filter((fav) => fav !== id));
    } else {
      saveFavorites([...favorites, id]);
    }
  };

  return (
    <div className="flex flex-row  ">
      <button
        id="favorite-btn"
        onClick={toggleFavorite}
        className="bg-transparent border-none cursor-pointer p-1"
      >
        {isFavorite ? (
          <Heart fill="red" color="red" size={16} />
        ) : (
          <Heart color="gray" size={16} fillOpacity={1} />
        )}
      </button>
      <Label htmlFor="favorite-btn" className="p-1">
        Favorite
      </Label>
    </div>
  );
}
