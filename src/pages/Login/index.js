import React from 'react';
import {StyleSheet, Text, View, ScrollView} from 'react-native';
import {ILLogo} from '../../assets';
import {Input, Link, Button, Gap} from '../../components';
import {colors, fonts} from '../../utils';

const Login = ({navigation}) => {
  return (
    <ScrollView style={styles.page} showsVerticalScrollIndicator={false}>
      <ILLogo />
      <Text style={styles.title}>Masuk dan mulai berkonsultasi</Text>
      <Input label="Email Address" />
      <Gap height={24} />
      <Input label="Password" size={12} />
      <Gap height={10} />
      <Link title="Forgot My Password" />
      <Gap height={40} />
      <Button title="Sign In" onPress={() => navigation.replace('MainApp')} />
      <Gap height={30} />
      <Link
        title="Create New Account"
        size={16}
        align="center"
        onPress={() => navigation.navigate('Register')}
      />
    </ScrollView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: {
    padding: 40,
    flex: 1,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    color: colors.text.primary,
    marginTop: 40,
    marginBottom: 40,
    fontFamily: fonts.primary[600],
    maxWidth: 153,
  },
});
