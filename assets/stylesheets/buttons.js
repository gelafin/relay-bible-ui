import { StyleSheet } from 'react-native';
import { colors } from './themeConstants/themeColors';

const buttonStyle = StyleSheet.create({
  default: {
    padding: '5px',
    backgroundColor: colors.BLUE,
    borderRadius: '5px',
    width: 'fit-content'
  },
  defaultLabel: {
    color: colors.WHITE
  },
  warningLabel: {
    color: colors.RED,
  },
  warningBorder: {
    borderColor: colors.RED
  },
  chip: {
    padding: 0,
    borderRadius: '20px',
  },
  transparent: {
    backgroundColor: ''
  }
});

export { buttonStyle };