import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {IconSendDark, IconSendLight} from '../../../assets';
import {colors} from '../../../utils';
import {TouchableOpacity} from 'react-native-gesture-handler';

const BtnIconSend = ({disable}) => {
  return (
    <TouchableOpacity style={styles.container(disable)}>
      {disable ? <IconSendDark /> : <IconSendLight />}
    </TouchableOpacity>
  );
};

export default BtnIconSend;

const styles = StyleSheet.create({
  container: disable => ({
    backgroundColor: disable ? colors.disable : colors.enable,
    width: 45,
    height: 45,
    borderRadius: 10,
    paddingTop: 3,
    paddingRight: 3,
    paddingLeft: 8,
    paddingBottom: 8,
  }),
});
