import { Link, Image, Spacer, Text, useTheme } from '@nextui-org/react';
import NextLink from 'next/link';
import React from 'react'

export const NavBar = () => {

  const {theme} = useTheme();
  
  return (
    <div style={{
      display:'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '0px 20px',
      backgroundColor: theme?.colors.gray900.value,
    }}>
      <Image 
        src='https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'
        alt='Ditto'
        width={70}
        height={70}
      />
      <NextLink href="/" passHref>
        <div style={{display:'flex', alignItems:'centerº  ºº'}}>
            <Text color='white' h2> P</Text> 
            <Text color='white' h3> okémon</Text>

        </div>
        
        
        
      </NextLink>
      <Spacer css={{flex:1}}/>

    <NextLink href='/favorities' passHref>
    
            <Text color='white' h3> Favoritos</Text>
        
      
    </NextLink>
  </div>
  )
}
