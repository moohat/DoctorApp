import AsyncStorage from '@react-native-community/async-storage';

export const storeData = async (key, value) => {
  try {
    //parsing json to string
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem(key, jsonValue);
  } catch (e) {
    // saving error
  }
};

export const getData = async key => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      // value previously stored
      //parsing string to json
      return JSON.parse(value);
    }
  } catch (e) {
    // error reading value
  }
};
