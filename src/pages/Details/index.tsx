import React, {useEffect} from 'react';
import Header from '../../components/Header';
import {useRoute, useNavigation} from '@react-navigation/native';
import {
  About,
  Container,
  ContentAbout,
  ContentInfoPokemon,
  Diviser,
  TextAbout,
  Type,
} from './styles';
import {theme} from '../../theme/theme';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import Pokeball from '../../assets/images/Pokeball.png';
import Balance from '../../assets/icons/Balance.png';
import Frame from '../../assets/icons/Frame.png';

const Details = () => {
  const [isFetching, setIsFetching] = React.useState(false);
  const navigation = useNavigation();
  const routes = useRoute();
  const {item} = routes.params as {item: any};

  function isLoading() {
    setIsFetching(true);
    setTimeout(() => {
      setIsFetching(false);
    }, 900);
  }

  useEffect(() => {
    isLoading();
  }, []);

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
            <TouchableOpacity
              activeOpacity={0.8}
              onPress={() => navigation.goBack()}>
              <Icon
                name="arrowleft"
                size={24}
                style={{marginRight: 16, color: '#fff'}}
              />
            </TouchableOpacity>
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
        contentContainerStyle={{alignItems: 'center', marginTop: 60}}
        style={{
          backgroundColor: theme.colors.bgPrimary,
          marginStart: 8,
          marginEnd: 8,
          marginBottom: 8,
          borderRadius: 4,
        }}>
        <Type style={{backgroundColor: item.color}}>
          <Text style={styles.textType}>
            {item.type ? item.type : 'Indefinido'}
          </Text>
        </Type>
        <About
          style={{
            fontFamily: theme.fonts.PoppinsBold,
            color: item.color,
            marginTop: 15,
          }}>
          Sobre
        </About>
        {isFetching ? (
          <ActivityIndicator
            size="large"
            color={item.color}
            style={{marginTop: 50}}
          />
        ) : (
          <>
            <ContentAbout style={{paddingStart: 36, paddingEnd: 36}}>
              <View
                style={{
                  width: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={Balance}
                    style={{
                      width: 18,
                      height: 18,
                      marginRight: 8,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: theme.fonts.PoppinsRegular,
                      fontSize: 12,
                      color: theme.colors.darkGray,
                    }}>
                    {item.weight ? item.weight : 'Indefinido'}{' '}
                    {item.weight ? 'kg' : ''}
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: theme.fonts.PoppinsRegular,
                    fontSize: 12,
                    marginTop: 10,
                    color: '#aaaaaa',
                  }}>
                  Peso
                </Text>
              </View>
              <Diviser style={{backgroundColor: '#aaaaaa'}} />
              <View
                style={{
                  width: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Image
                    source={Frame}
                    style={{
                      width: 18,
                      height: 18,
                      marginRight: 8,
                      resizeMode: 'contain',
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: theme.fonts.PoppinsRegular,
                      fontSize: 12,
                      color: theme.colors.darkGray,
                    }}>
                    {item.height ? item.height : 'Indefinido'}{' '}
                    {item.height ? 'm' : ''}
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: theme.fonts.PoppinsRegular,
                    fontSize: 12,
                    marginTop: 10,
                    color: '#aaaaaa',
                  }}>
                  Altura
                </Text>
              </View>
              <Diviser style={{backgroundColor: '#aaaaaa'}} />
              <View
                style={{
                  width: 90,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <Text
                    style={{
                      fontFamily: theme.fonts.PoppinsRegular,
                      fontSize: 12,
                      color: theme.colors.darkGray,
                    }}>
                    {item.mov ? item.mov : 'Indefinido'}
                  </Text>
                </View>
                <Text
                  style={{
                    fontFamily: theme.fonts.PoppinsRegular,
                    fontSize: 12,
                    marginTop: 10,
                    color: '#aaaaaa',
                  }}>
                  Movimentos
                </Text>
              </View>
            </ContentAbout>
            <TextAbout
              style={{
                fontFamily: theme.fonts.PoppinsRegular,
                color: theme.colors.darkGray,
                marginTop: 16,
              }}>
              {item.about ? item.about : 'Indefinido'}
            </TextAbout>
            <Text
              style={{
                fontFamily: theme.fonts.PoppinsBold,
                color: item.color,
                fontSize: 16,
                marginTop: 15,
              }}>
              Estatísticas básicas
            </Text>
            <View>
              <Text
                style={{
                  fontFamily: theme.fonts.PoppinsBold,
                  color: theme.colors.darkGray,
                  marginTop: 40,
                }}>
                Ainda não há estatísticas
              </Text>
            </View>
          </>
        )}
      </ContentInfoPokemon>
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
  textType: {
    fontFamily: theme.fonts.PoppinsBold,
    paddingHorizontal: 10,
    paddingVertical: 2,
    color: theme.colors.white,
  },
});

export default Details;
