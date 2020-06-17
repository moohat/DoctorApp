import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Profile, ProfileItem, Button, Gap} from '../../components';
import {DummyDoctor9} from '../../assets';
import {colors} from '../../utils';

const DoctorProfile = ({navigation}) => {
  return (
    <View style={styles.page}>
        <Header title="Doctor Profile" onPress={() => navigation.goBack()} />
        <Profile
          name="Nairobi Putri Hayza"
          desc="Dokter Anak"
          avatar={DummyDoctor9}
          isDoctor
        />
        <Gap height={10} />
        <ProfileItem title="Alumnus" desc="Universitas Indonesia 2020" />
        <ProfileItem title="Tempat Praktik" desc="Rumah Sakit Umum, Bandung" />
        <ProfileItem title="No. STR" desc="0000116622081996" />
        <View style={styles.action}>

      <Button title="Start Consultation" />
        </View>
    </View>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.white,
  },
  action: {
    paddingHorizontal: 40,
    paddingTop: 23,
  }
});
