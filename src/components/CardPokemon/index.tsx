import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {theme} from '../../theme/theme';

interface CardPokemonProps {
  name?: string;
  picture?: any;
  styleContainer?: {};
  action: () => void;
}

const CardPokemon = ({
  name,
  picture,
  styleContainer,
  action,
}: CardPokemonProps) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={action}>
      <View style={{width: 110, marginBottom: 12}}>
        <View style={styleContainer}>
          <Image
            source={picture}
            style={{
              width: 105.2,
              height: 100,
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
    </TouchableOpacity>
  );
};

export default CardPokemon;
