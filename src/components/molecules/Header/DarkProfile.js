import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {colors, fonts} from '../../../utils';
import {Button} from '../../atoms';
import {DummyDoctor1, DummyDoctor9} from '../../../assets';

const DarkProfile = ({onPress}) => {
  return (
    <View style={styles.container}>
      <Button type="icon-only" icon="back-light" onPress={onPress} />
      <View style={styles.wrapContent}>
        <Text style={styles.name}>Nairobi Putri Hayza</Text>
        <Text style={styles.desc}>Dokter Anak</Text>
      </View>
      <Image source={DummyDoctor9} style={styles.avatar} />
    </View>
  );
};

export default DarkProfile;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.secondary,
    flexDirection: 'row',
    paddingRight: 16,
    paddingLeft: 20,
    paddingVertical: 30,
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  wrapContent: {
    flex: 1,
  },
  name: {
      fontSize: 20,
      fontFamily: fonts.primary[600],
      color: colors.white,
      textAlign: 'center',
  },
  desc: {
    textAlign: 'center',
    fontSize: 14,
    fontFamily: fonts.primary[400],
    color: colors.text.subTitle,
    marginTop: 6
  },
  avatar: {
    width: 46,
    height: 46,
    borderRadius: 46 / 2,
  },
});
