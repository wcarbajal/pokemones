import { Image, Spacer, Text, useTheme } from '@nextui-org/react';
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
      <Text color='white' h2> P</Text>
      <Text color='white' h3> okémon</Text>
      <Spacer css={{flex:1
      }}/>

      <Text color='white' h3> Favoritos</Text>
      </div>
  )
}
