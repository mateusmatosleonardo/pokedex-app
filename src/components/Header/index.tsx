import React from 'react';
import {View} from 'react-native';

interface HeaderProps {
  style?: {};
  children?: React.ReactNode;
}

const Header = ({style, children}: HeaderProps) => {
  return <View style={style}>{children}</View>;
};

export default Header;
