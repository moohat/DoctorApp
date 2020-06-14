import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {DummyHospital1} from '../../../assets';

const ListHospital = ({type, name, address, pic}) => {
  return (
    <View style={styles.container}>
      <Image source={pic} style={styles.image} />
      <View>
        <Text style={styles.text}>{type}</Text>
        <Text style={styles.text}>{name}</Text>
        <Text style={styles.address}>{address}</Text>
      </View>
    </View>
  );
};

export default ListHospital;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: colors.border,
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    marginRight: 16,
    height: 60,
    width: 80,
    borderRadius: 11,
  },
  text: {
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
  address: {
    fontSize: 12,
    fontFamily: fonts.primary[300],
    color: colors.text.secondary,
    marginTop: 6,
  },
});
