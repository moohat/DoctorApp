import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
// import {Image} from 'react-native-svg';
import {DummyUser} from '../../../assets';

const HomeProfile = () => {
  return (
    <View style={styles.container}>
      <Image source={DummyUser} style={styles.avatar} />
      <View>
        <Text style={styles.name}>M. Taufik Hidayat</Text>
        <Text>Mobile Developer</Text>
      </View>
    </View>
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

  }
});
