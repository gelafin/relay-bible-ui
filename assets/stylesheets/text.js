import { StyleSheet } from 'react-native';
import { colors } from './themeConstants/themeColors';

const textStyles = StyleSheet.create({
  superscript: {
    fontSize: '0.7rem'
  },
  plain: {
    color: 'black'
  },
  listSelectOption: {
    fontSize: 32
  },
  selectedVerse: {
    borderBottomColor: colors.BLUE,
    borderBottomWidth: '2px'
  }
});

export { textStyles };
