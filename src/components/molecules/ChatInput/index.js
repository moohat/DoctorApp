import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Input, Button} from '../../atoms';
import {IconSendDark} from '../../../assets';

const ChatInput = () => {
  return (
    <View style={styles.container}>
      <Input />
      <Button type="icon-only" icon="send-light" />
    </View>
  );
};

export default ChatInput;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems:'center'
    }
});
