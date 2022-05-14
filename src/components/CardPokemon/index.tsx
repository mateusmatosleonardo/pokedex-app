import React from 'react';
import {Image, Text, View} from 'react-native';
import {theme} from '../../theme/theme';

interface CardPokemonProps {
  name?: string;
  picture?: any | null;
}

const CardPokemon = ({name, picture}: CardPokemonProps) => {
  return (
    <View style={{width: 104, marginBottom: 12}}>
      <View style={{backgroundColor: '#74CB48', borderRadius: 8}}>
        <Image
          source={picture}
          style={{
            width: 104,
            height: 104,
            resizeMode: 'contain',
            backgroundColor: theme.colors.white,
            borderRadius: 8,
          }}
        />
        <Text
          style={{
            color: theme.colors.white,
            fontFamily: theme.fonts.PoppinsRegular,
            fontSize: theme.sizes.small,
            textAlign: 'center',
            paddingVertical: 4,
          }}>
          {name}
        </Text>
      </View>
    </View>
  );
};

export default CardPokemon;
