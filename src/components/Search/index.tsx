import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {theme} from '../../theme/theme';
import Icon from 'react-native-vector-icons/EvilIcons';

interface SearchProps {
  onChangeText?: (text: string) => void;
  value?: string;
}

const Search = ({onChangeText, value}: SearchProps) => {
  return (
    <View style={styles.inputArea}>
      <TextInput
        style={{color: theme.colors.darkGray}}
        placeholder="Procurar"
        placeholderTextColor={theme.colors.darkGray}
        onChangeText={onChangeText}
        value={value}
      />
      <Icon
        name="search"
        size={22}
        color={theme.colors.darkGray}
        style={{position: 'absolute', top: 10, left: 6}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputArea: {
    width: '100%',
    height: 41.5,
    paddingLeft: 28,
    borderRadius: 8,
    backgroundColor: theme.colors.white,
  },
});

export default Search;
