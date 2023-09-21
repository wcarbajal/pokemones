import { FC } from 'react';
import { SmallPokemon } from '@/interfaces';
import { Text, Button, Card, Grid, Row, Image } from '@nextui-org/react'
import { useRouter } from 'next/router';

interface Props{
    pokemon: SmallPokemon,
}
export const PokemonCard:FC<Props> = ({pokemon}) => {

    const router = useRouter();

    const onClick = () => {
            router.push(`/pokemon/${pokemon.id}`)
    }

  return (
    <Grid xs= {12} sm= {6} md= {4} lg= {2} xl= {3} key= {pokemon.id}>
            <Card onClick= {onClick} hoverable clickable>
                <Card.Body css={{ p:1}}>
                    <Card.Image
                        src={pokemon.img}   
                        width='100%'
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text transform='capitalize'> {pokemon.name}</Text>
                        <Text># -  {pokemon.id}</Text>
                    </Row>
                </Card.Footer>
            </Card>
         </Grid>
  )
}
