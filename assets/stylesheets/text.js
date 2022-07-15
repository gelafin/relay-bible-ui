import { StyleSheet } from 'react-native';

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
    textDecorationLine: 'underline',
    textDecorationColor: 'blue'
  }
});

export { textStyles };
