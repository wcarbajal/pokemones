import { useState, useEffect } from "react";
import { Layout } from "@/components/layouts";
import { NoFavorites } from "@/components/ui";
import { Card, Container, Grid, Image, Text } from "@nextui-org/react";
import { pokemons } from "@/utils";
import { FavoritePokemons } from "@/components/ui/FavoritePokemons";

const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritePokemons(pokemons);
  }, []);

  return (
    <Layout title="Pokemons - Favoritos">
      {favoritePokemons.length === 0 ? (
        <NoFavorites />
      ) : (
          <FavoritePokemons pokemons={ favoritePokemons } />
      )}
    </Layout>
  );
};

export default FavoritesPage;
