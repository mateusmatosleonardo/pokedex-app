import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import Header from '../components/Header';
import Pokeball from '../assets/icons/Pokeball.png';

const Home = () => {
  return (
    <View>
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
      </Header>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    width: '100%',
    height: 50,
    paddingVertical: 5,
    paddingHorizontal: 25,
    backgroundColor: 'salmon',
  },
  titleHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 12,
    // fontFamily: 'Poppins-Bold',
  },
});

export default Home;
