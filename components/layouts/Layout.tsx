import  Head  from 'next/head';
import { NavBar } from "../ui";
import styles from '@/styles/Home.module.css';


interface Props {
  title?: string,
  children: React.ReactNode
}

export const Layout: React.FC<Props>= ({  children, title  }) => {
  return (
    <>
      <Head>
        <title> {title || 'PokemonApp'} </title>
        <meta name='author' content='Wuilmer Carbajal' />
        <meta name='description' content={`Información sobre el pokemon ${title}`} />
        <meta name='keywords' content={`${title}, pokemon, pokedex`} />
        
      </Head>
        <NavBar />
      <main style={{
        padding: '0px 20px',
      }}>
        { children }
      </main>
    </>
  )
}
