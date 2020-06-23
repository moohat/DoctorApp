import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Header, Button, Link, Gap} from '../../components';
import {ILNullPhoto, IconAddPhoto, IconRemovePhoto} from '../../assets';
import {colors, fonts} from '../../utils';
import ImagePicker from 'react-native-image-picker';
import {showMessage} from 'react-native-flash-message';

const UploadPhoto = ({navigation}) => {
  const [hasPhoto, sethasPhoto] = useState(false);
  const [photo, setPhoto] = useState(ILNullPhoto);
  const getImage = () => {
    // Open Image Library:
    ImagePicker.launchImageLibrary({}, response => {
      // Same code as in above section!
      console.log('response: ', response);
      if (response.didCancel || response.error) {
        showMessage({
          message: 'Image belum dipilih',
          description: 'Pilih Image yang akan diupload',
          type: 'danger',
        });
      } else {
        const sourcePhoto = {uri: response.uri};
        setPhoto(sourcePhoto);
        sethasPhoto(true);
      }
    });
  };
  return (
    <View style={styles.page}>
      <Header
        title="Upload Photo"
        onPress={() => navigation.goBack('Register')}
      />
      <View style={styles.content}>
        <View style={styles.profile}>
          <TouchableOpacity style={styles.wrapperAvatar} onPress={getImage}>
            <Image source={photo} style={styles.avatar} />
            {hasPhoto ? (
              <IconRemovePhoto style={styles.addPhoto} />
            ) : (
              <IconAddPhoto style={styles.addPhoto} />
            )}
          </TouchableOpacity>
          <Gap height={26} />
          <Text style={styles.name}>M Taufik Hidayat</Text>
          <Gap height={4} />

          <Text style={styles.profession}>Mobile Developer</Text>
        </View>
        <View>
          <Button
            disable={!hasPhoto}
            title="Upload and Continue"
            onPress={() => navigation.navigate.replace('MainApp')}
          />

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
    borderRadius: 110,
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
