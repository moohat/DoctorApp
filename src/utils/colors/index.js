/* eslint-disable no-undef */
const mainColors = {
  green1: '#0BCAD4',
  green2: '#EDFCFD',
  green3: '#EDEEF0',
  dark1: '#112340',
  dark2: '#495A75',
  dark3: '#8092AF',
  blue1: '#0066CB',
  grey1: '#7D8797',
  grey2: '#E9E9E9',
  black1: '#000000',
  black2: 'rgba(0, 0, 0, 0.5)',
  red1: '#E06379',
};

export const colors = {
  primary: mainColors.green1,
  secondary: mainColors.dark1,
  white: 'white',
  black: 'black',
  disable: mainColors.green3,
  enable: mainColors.blue1,
  text: {
    primary: mainColors.dark1,
    secondary: mainColors.grey1,
    menuInactive: mainColors.dark2,
    menuActive: mainColors.green1,
    subTitle: mainColors.dark3,
  },
  button: {
    primary: {
      background: mainColors.green1,
      text: 'white',
    },
    secondary: {
      background: 'white',
      text: mainColors.dark1,
    },
  },
  border: mainColors.grey2,
  cardLight: mainColors.green2,
  loadingBackground: mainColors.black2,
  error: mainColors.red1,
};
