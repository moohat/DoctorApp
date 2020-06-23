import React, {useState} from 'react';
import {StyleSheet, View, ScrollView} from 'react-native';
import {Button, Gap, Header, Input, Loading} from '../../components';
import {colors, useForm} from '../../utils';
import {Firebase} from '../../config';

import {showMessage, hideMessage} from 'react-native-flash-message';

const Register = ({navigation}) => {
  const [form, setForm] = useForm({
    fullName: '',
    profession: '',
    email: '',
    password: '',
  });

  const [loading, setLoading] = useState(false);

  const onContinue = () => {
    console.log(form);
    setLoading(true);
    Firebase.auth()
      .createUserWithEmailAndPassword(form.email, form.password)
      .then(success => {
        showMessage({
          floating: true,
          position: 'center',
          message: 'Pendaftaran Berhasil',
          desc: 'Selamat Pendaftaran anda berhasil',
          type: 'success',
        });
        setLoading(false);
        setForm('reset');
        const data = {
          fullName: form.fullName,
          profession: form.profession,
          email: form.email,
        };
        //save form data to database(realtime database)
        Firebase.database()
          .ref(`users/${success.user.uid}/`)
          .set(data);
        console.log(`Register success: ${success}`);
      })
      .catch(error => {
        // Handle Errors here.
        const errorMessage = error.message;
        showMessage({
          message: errorMessage,
          // description: errorMessage,
          type: 'default',
          backgroundColor: colors.error, // background color
          color: colors.white, // text color
        });
        setLoading(false);
        // alert(`error register: ${errorMessage}`);

        // ...
      });
    // navigation.navigate('UploadPhoto');
  };

  return (
    <>
      <View style={styles.page}>
        <Header title="Daftar Akun" onPress={() => navigation.goBack()} />
        <View style={styles.content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Input
              label="Full Name"
              value={form.fullName}
              onChangeText={value => setForm('fullName', value)}
            />
            <Gap height={24} />
            <Input
              label="Pekerjaan"
              value={form.profession}
              onChangeText={value => setForm('profession', value)}
            />
            <Gap height={24} />
            <Input
              label="Email Address"
              value={form.email}
              onChangeText={value => setForm('email', value)}
            />
            <Gap height={24} />
            <Input
              label="Password"
              value={form.password}
              onChangeText={value => setForm('password', value)}
              secureTextEntry
            />
            <Gap height={40} />
          </ScrollView>
          <Button title="Continue" onPress={onContinue} />
        </View>
      </View>

      {loading && <Loading />}
    </>
  );
};

export default Register;

const styles = StyleSheet.create({
  page: {
    backgroundColor: colors.white,
    flex: 1,
  },
  content: {
    padding: 40,
    paddingTop: 0,
  },
});
