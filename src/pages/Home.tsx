import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Header from '../components/Header';
import Pokeball from '../assets/icons/Pokeball.png';
import {theme} from '../theme/theme';
import Search from '../components/Search';

const Home = () => {
  return (
    <View style={styles.main}>
      <Header style={styles.header}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Image source={Pokeball} style={{width: 28, height: 28}} />
          <Text style={styles.titleHeader}>Pokédex</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7}>
          <Icon name="arrowdown" size={24} color={theme.colors.darkGray} />
        </TouchableOpacity>
      </Header>
      <Search />
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: theme.colors.bgPrimary,
    paddingHorizontal: 25,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: 60,
    paddingVertical: 5,
  },
  titleHeader: {
    fontFamily: theme.fonts.PoppinsBold,
    fontSize: theme.sizes.large,
    color: theme.colors.darkGray,
    marginLeft: 12,
  },
});

export default Home;