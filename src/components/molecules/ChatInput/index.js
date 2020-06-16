import React from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {Input, Button} from '../../atoms';
import {IconSendDark} from '../../../assets';
import {colors, fonts} from '../../../utils';

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Tulis pesan untuk Nairobi" />
      <Button title="Send" type="btn-icon-send" />
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    padding: 16,
},
input: {
    flex: 1,
    backgroundColor: colors.disable,
    padding: 14,
    borderRadius: 10,
    marginRight: 10,
    maxHeight: 45,
    fontSize: 14,
    fontFamily: fonts.primary.normal,
  },
});
