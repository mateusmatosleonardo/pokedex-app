import React from 'react';
import {Image, ScrollView, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import Pokeball from '../../assets/icons/Pokeball.png';
import Search from '../../components/Search';
import CardPokemon from '../../components/CardPokemon';
import {theme} from '../../theme/theme';
import {dataMock} from '../../utils/pokemonsMock';
import {Main, TitleHeader} from './styles';

const Home = () => {
  return (
    <Main style={{backgroundColor: theme.colors.bgPrimary}}>
      <Header
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
          height: 60,
          paddingVertical: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Pokeball} style={{width: 28, height: 28}} />
          <TitleHeader
            style={{
              fontFamily: theme.fonts.PoppinsBold,
              fontSize: theme.sizes.large,
              color: theme.colors.darkGray,
            }}>
            Pokédex
          </TitleHeader>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Icon name="arrowdown" size={24} color={theme.colors.darkGray} />
        </TouchableOpacity>
      </Header>
      <Search />
      <ScrollView
        showsVerticalScrollIndicator={false}
        overScrollMode="never"
        contentContainerStyle={{
          width: '100%',
          flexDirection: 'row',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
        }}>
        {dataMock.map((item, index) => (
          <CardPokemon
            key={index}
            name={item.name}
            picture={item.picture}
            styleContainer={{
              backgroundColor: item.color,
              borderRadius: 8,
              paddingHorizontal: 2,
            }}
          />
        ))}
      </ScrollView>
    </Main>
  );
};

export default Home;
