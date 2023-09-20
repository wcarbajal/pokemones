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


const HomePage: NextPage = (props) => {

   

  return (
    <Layout title='Listado de Pokemons'>    
    
    <ul>
      <li>#1 - Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>
      <li>Pokemon</li>

    </ul>


    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  
  const {data} = await pokeApi.get<PokemonListResponse>('/pokemon?limit=151');
  console.log(data.results);
  const pokemons: SmallPokemon[] = data.results.map((poke, indice)=>)

  return {
    props: {
      pokemons: data.results,
    }
  }
}

export default HomePage;