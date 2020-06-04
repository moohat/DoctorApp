import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconBackDark} from '../../../assets';
import {Gap} from '../../atoms';
import { colors } from '../../../utils';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <IconBackDark />
      <Text style={styles.title}>{title}</Text>
      <Gap width={24} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 30,
    backgroundColor: colors.white,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 20,
    fontFamily: 'Nunito-SemiBold',
    color: colors.text.primary,
  },
});
