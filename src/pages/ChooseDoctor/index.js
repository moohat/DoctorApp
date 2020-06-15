import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Header, ListDoctor} from '../../components';
import {DummyDoctor4, DummyDoctor5, DummyDoctor6} from '../../assets';
import {colors} from '../../utils';

const ChooseDoctor = ({navigation}) => {
  const [doctors] = useState([
    {
      id: 1,
      profile: DummyDoctor4,
      name: 'Alexander Jannie',
      desc: 'Wanita',
    },
    {
      id: 2,
      profile: DummyDoctor5,
      name: 'Nairobi Putri Hayza',
      desc: 'Oh tentu saja tidak karena jeruk it...',
    },
    {
      id: 3,
      profile: DummyDoctor6,
      name: 'John McParker Steve',
      desc: 'Oke menurut pak dokter bagaimana unt...',
    },
  ]);
  return (
    <View style={styles.page}>
      <Header
        type="dark"
        title="Pilih Dokter Anak"
        onPress={() => navigation.goBack()}
      />

      <ListDoctor
        type="next"
        profile={DummyDoctor4}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor4}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor4}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor4}
        name="Alexander Jannie"
        desc="Wanita"
      />
      <ListDoctor
        type="next"
        profile={DummyDoctor4}
        name="Alexander Jannie"
        desc="Wanita"
      />
    </View>
  );
};

export default ChooseDoctor;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
});
