import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
//import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { Button } from '@nextui-org/react'
import { Layout } from '../components/layouts'
import { NextPage } from 'next'
import { pokeApi } from '../api'
import { PokemonListResponse, SmallPokemon } from '../interfaces'

interface Props {
  pokemons: SmallPokemon[];
}


const HomePage: NextPage<Props> = ({pokemons}) => {

   

  return (
    <Layout title='Listado de Pokemons'>    
    
    <ul>
      {
        pokemons.map( ({id, name}) => (
            <li key={id}> 
             {id} -  {name}
            </li>

        ))

      }
    </ul>


    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  
  const pokemons: SmallPokemon[] = data.results.map( (poke, i) => ({
    ...poke,
    id: i+1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/others/dream-world/${i+1}`,
  }) )

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage;