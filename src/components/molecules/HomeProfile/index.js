import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import {Image} from 'react-native-svg';
import {DummyUser} from '../../../assets';
import { fonts, colors } from '../../../utils';
import { TouchableOpacity } from 'react-native-gesture-handler';

const HomeProfile = ({onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>M. Taufik Hidayat</Text>
        <Text style={styles.profession}>Mobile Developer</Text>
      </View>
    </TouchableOpacity>
  );
};

export default HomeProfile;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
  },
  profession: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
  }
});
