import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Input, Button, ChatInput, ChatItem} from '../../components';
import {colors, fonts} from '../../utils';
import {IconNext} from '../../assets';

const Chatting = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        type="dark-profile"
        title="Nairobi Putri Hayza"
        onPress={() => navigation.goBack()}
      />
      <Text style={styles.chatDate}>Senin, 21 Maret, 2020</Text>
      <ChatItem />
      <ChatItem />
      <ChatItem />
      <ChatInput />
      
    </View>
  );
};

export default Chatting;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    // flex: 1,
  },
  chatDate: {
      fontSize: 11,
      fontFamily: fonts.primary.normal,
      color: colors.text.secondary,
      marginVertical: 20,
      textAlign: 'center'
  }
});
