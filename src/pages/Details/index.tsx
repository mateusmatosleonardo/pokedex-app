import React from 'react';
import Header from '../../components/Header';
import {useRoute} from '@react-navigation/native';
import {Container, ContentInfoPokemon} from './styles';
import {theme} from '../../theme/theme';
import {View, Text, StyleSheet, ImageBackground, Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Pokeball from '../../assets/images/Pokeball.png';

const Details = () => {
  const routes = useRoute();
  const {item} = routes.params as {item: any};

  return (
    <Container style={{backgroundColor: item.color}}>
      <View style={{width: '100%', height: 275}}>
        <ImageBackground
          source={Pokeball}
          style={{
            width: 250,
            height: 250,
            position: 'absolute',
            right: 10,
            top: 10,
          }}
        />
        <Header style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Icon
              name="arrowleft"
              size={24}
              style={{marginRight: 16, color: '#fff'}}
            />
            <Text style={styles.titleHeader}>{item.name}</Text>
          </View>
          <Text style={styles.id}>#00{item.id}</Text>
        </Header>
        <View style={{alignItems: 'center', marginTop: 55, zIndex: 99}}>
          <Image
            source={item.picture}
            style={{width: 208, height: 208, position: 'absolute'}}
          />
        </View>
      </View>
      <ContentInfoPokemon
        style={{
          backgroundColor: theme.colors.bgPrimary,
          marginStart: 8,
          marginEnd: 8,
          marginBottom: 8,
          borderRadius: 4,
        }}
      />
    </Container>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    height: 58,
    paddingStart: 22,
    paddingEnd: 22,
    paddingTop: 22,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleHeader: {
    fontSize: 20,
    fontFamily: theme.fonts.PoppinsBold,
    color: theme.colors.white,
  },
  id: {
    fontFamily: theme.fonts.PoppinsBold,
    marginTop: 2,
    color: theme.colors.white,
  },
});

export default Details;
