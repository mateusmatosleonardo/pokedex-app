import React from 'react';
import {Image, Text, View} from 'react-native';
import {theme} from '../../theme/theme';

interface CardPokemonProps {
  name?: string;
  picture?: any;
  styleContainer?: {};
}

const CardPokemon = ({name, picture, styleContainer}: CardPokemonProps) => {
  return (
    <View style={{width: 104, marginBottom: 12}}>
      <View style={styleContainer}>
        <Image
          source={picture}
          style={{
            width: 99.2,
            height: 90,
            resizeMode: 'contain',
            backgroundColor: theme.colors.white,
            borderRadius: 8,
            marginTop: 2,
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
