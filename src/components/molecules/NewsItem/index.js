import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {fonts, colors} from '../../../utils';
import {DummyNews1} from '../../../assets';

const NewsItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Is it safe to stay at home during coronavirus?
        </Text>
        <Text style={styles.dateTime}>Today</Text>
      </View>
      <Image source={DummyNews1} style={styles.image} />
    </View>
  );
};

export default NewsItem;

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    flexDirection: 'row',
    paddingBottom: 12,
    paddingTop: 16,
    borderBottomColor: colors.border,
    paddingHorizontal: 16,
  },
  titleWrapper: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: fonts.primary[600],
    maxWidth: '90%',
    color: colors.text.primary,
  },
  dateTime: {
    fontSize: 12,
    fontFamily: fonts.primary.normal,
    marginTop: 4,
    marginBottom: 12,
    color: colors.text.secondary,
  },
  image: {
    width: 80,
    height: 60,
    borderRadius: 11,
  },
});
