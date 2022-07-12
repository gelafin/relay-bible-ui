import { StyleSheet } from 'react-native';

const colors = {
  'WHITE': '#FFF',
  'DARK_GRAY': '#707070'
}

const layoutStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  pageMargins: {
    marginLeft: '20px'
  },
  appBar: {
    backgroundColor: colors.DARK_GRAY
  }
});

export { layoutStyles };