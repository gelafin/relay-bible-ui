import { StyleSheet } from 'react-native';
import { colors } from './themeConstants/themeColors';

const buttonStyle = StyleSheet.create({
  default: {
    padding: '5px',
    backgroundColor: colors.BLUE,
    borderRadius: '5px',
    width: 'fit-content',
    cursor: 'pointer'
  },
  defaultLabel: {
    color: colors.WHITE
  },
  warningLabel: {
    color: colors.RED,
  },
  warning: {
    backgroundColor: colors.WHITE,
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