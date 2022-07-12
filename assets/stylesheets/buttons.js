import { StyleSheet } from 'react-native';

const buttonStyle = StyleSheet.create({
  default: {
    padding: '5px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    width: 'fit-content'
  },
  warningLabel: {
    color: 'red',
  },
  warningBorder: {
    borderColor: 'red'
  }
});

export { buttonStyle };