import { Card, Grid, Image } from "@nextui-org/react";
import React, {FC} from "react";
import { pokemons } from '@/utils';
import { Pokemon } from "@/interfaces";

interface Props{
  pokemons: number[];
}
export const FavoritePokemons: FC<Props> = ({pokemons}) => {
  return (
    <>
      <Grid.Container gap={2} direcction="row" justify="flex-start">
        {pokemons.map((id: number) => (
          <Grid xs={6} sm={3} md={2} xl={1} key={id}>
            <Card hoverable clickable css={{ padding: 10 }}>
              <Image
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
                alt={`${id}`}
                width={100}
                height={100}
              />
            </Card>
          </Grid>
        ))}
      </Grid.Container>
    </>
  );
};
