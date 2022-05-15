import React from 'react';
import {TextInput} from 'react-native';
import {theme} from '../../theme/theme';
import Icon from 'react-native-vector-icons/EvilIcons';
import {InputArea} from './styles';

interface SearchProps {
  onChangeText?: (text: string) => void;
  value?: string;
}

const Search = ({onChangeText, value}: SearchProps) => {
  return (
    <InputArea style={{backgroundColor: theme.colors.white}}>
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
    </InputArea>
  );
};

export default Search;
