import { Card, Grid, Image } from "@nextui-org/react";
import React, { FC } from "react";

import { FavoriteCardPokemon } from ".";


interface Props {
  pokemons: number[];
}
export const FavoritePokemons: FC<Props> = ({ pokemons }) => {
  return (
    <>
      <Grid.Container gap={2} direcction="row" justify="flex-start">
        {pokemons.map((id) => (
          <FavoriteCardPokemon pokemonId={id} key={id} />
          ))
        }
      </Grid.Container>
    </>
  );
};
