import React from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {
  ILHospitalBG,
  DummyHospital1,
  DummyHospital2,
  DummyHospital3,
} from '../../assets';
import {ListHospital} from '../../components';
import {colors, fonts} from '../../utils';

const Hospitals = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ILHospitalBG} style={styles.background}>
        <Text style={styles.title}>Nearby Hospitals</Text>
        <Text style={styles.desc}>3 tersedia</Text>
      </ImageBackground>
      <View style={styles.content}>
    {/* menggunakan inline dummy data */}

        <ListHospital
          type="Rumah Sakit"
          name="Citra Bunga Merdeka"
          address="Jl. Raya Cibubur"
          pic={DummyHospital1}
        />
        <ListHospital
          type="Rumah Sakit Anak"
          name="Happy Family & Kids"
          address="Jl. Raya Sejahtera Makmur 12"
          pic={DummyHospital2}
        />
        <ListHospital
          type="Rumah Sakit Umum"
          name="Tingkatan Paling Atas"
          address="Jl. Raya Cibubur"
          pic={DummyHospital3}
        />
      </View>
    </View>
  );
};

export default Hospitals;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.secondary,
    flex: 1,
  },
  background: {
    height: 240,
    padding: 30,
  },
  title: {
    fontSize: 20,
    fontFamily: fonts.primary[600],
    color: colors.white,
    textAlign: 'center',
  },
  desc: {
    fontSize: 14,
    fontFamily: fonts.primary[300],
    color: colors.white,
    marginTop: 6,
    textAlign: 'center',
  },
  content: {
    backgroundColor: colors.white,
    flex: 1,
    borderRadius: 20,
    marginTop: -30,
    paddingTop: 14,
  },
});
