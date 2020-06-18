import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto, IconAddPhoto} from '../../assets';
import {colors, fonts} from '../../utils';

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header
        title="Upload Photo"
        onPress={() => navigation.goBack('Register')}
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <View style={styles.wrapperAvatar}>
            <Image source={ILNullPhoto} style={styles.avatar} />
            <IconAddPhoto style={styles.addPhoto} />
            {/* if you take image from url
        <Image source={{uri: 'url-image'}} /> */}
          </View>
          <Gap height={26} />
          <Text style={styles.name}>M Taufik Hidayat</Text>
          <Gap height={4} />

          <Text style={styles.profession}>Mobile Developer</Text>
        </View>
        <View>
          <Button title="Upload and Continue" />
          <Gap height={30} />
          <Link
            title="Skip for this"
            align="center"
            size={16}
            onPress={() => navigation.replace('MainApp')}
          />
        </View>
      </View>
    </View>
  );
};

export default UploadPhoto;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    paddingHorizontal: 40,
    paddingBottom: 64,
    flex: 1,
    justifyContent: 'space-between',
  },
  avatar: {
    height: 110,
    width: 110,
  },
  wrapperAvatar: {
    height: 130,
    width: 130,
    borderWidth: 1,
    borderRadius: 130 / 2,
    borderColor: colors.border,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addPhoto: {
    position: 'absolute',
    bottom: 8,
    right: 6,
  },
  name: {
    fontSize: 24,
    fontFamily: fonts.primary[600],
    color: colors.text.primary,
    textAlign: 'center',
  },
  profession: {
    fontSize: 18,
    fontFamily: fonts.primary.normal,
    color: colors.text.secondary,
    textAlign: 'center',
  },
  skip: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
});
