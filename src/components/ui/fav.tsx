"use client";
import { useLocalStorage } from "@uidotdev/usehooks";
import { Heart, HeartCrack } from "lucide-react"; // Lucide icons

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
    <button
      onClick={toggleFavorite}
      className="bg-transparent border-none cursor-pointer p-1"
    >
      {isFavorite ? (
        <Heart color="red" size={24} />
      ) : (
        <HeartCrack color="gray" size={24} />
      )}
    </button>
  );
}
