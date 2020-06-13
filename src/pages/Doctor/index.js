import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {
  HomeProfile,
  DoctorCategory,
  RatedDoctor,
  NewsItem,
} from '../../components';

const Doctor = () => {
  return (
    <View style={styles.page}>
      <HomeProfile />
      <Text>Mau konsultasi dengan siapa hari ini?</Text>
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <DoctorCategory />
      <Text>Top Rated Doctors</Text>
      <RatedDoctor />
      <RatedDoctor />
      <RatedDoctor />
      <Text>Good News</Text>
      <NewsItem />
      <NewsItem />
      <NewsItem />
    </View>
  );
};

export default Doctor;

const styles = StyleSheet.create({
  page: {
    paddingHorizontal: 16,
    paddingVertical: 30,
  },
});
