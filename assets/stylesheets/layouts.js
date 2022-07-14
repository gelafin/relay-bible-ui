import { StyleSheet } from 'react-native';
import { colors } from './themeConstants/themeColors';

const layoutStyles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.WHITE,
  },
  pageMargins: {
    marginLeft: '20px',
    marginRight: '20px',
    flex: 1
  },
  horizontalContainer: {
    flexDirection: 'row'
  },
  appBar: {
    backgroundColor: colors.LIGHT_GRAY
  },
  appBarBold: {
    backgroundColor: colors.DARK_GRAY
  },
  appBarSmall: {
    height: 'fit-content',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  appBarSmallText: {
    fontSize: '1rem'
  },
  readingPage: {
    backgroundColor: colors.KHAKI
  }
  
});

export { layoutStyles };