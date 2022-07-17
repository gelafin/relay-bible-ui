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
  centerAlign: {
    alignItems: 'center'
  },
  centerJustify: {
    justifyContent: 'center'
  },
  absolute: {
    position: 'absolute'
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
  },
  listSelectOption: {
    padding: 20,
    cursor: 'pointer'
  },
  listSelectOptionSelected: {
    backgroundColor: colors.KHAKI
  },
  modalContainerStyle: {
    backgroundColor: colors.WHITE,
    padding: 20,
    width: '80vw',
    marginLeft: 'auto',
    marginRight: 'auto',
    height: '100%'
  },
  inline: {
    display: 'inline'
  },
  drawer: {
    position: 'fixed',
    bottom: 0,
    width: '100vw',
    height: '250px',
    backgroundColor: colors.WHITE,
    padding: '10px 30px',
    zIndex: 100,
    boxShadow: 'rgb(0 0 0 / 60%) 0px -4px 4px 2px'  
  },
  fullHeight: {
    height: '100vh'
  },
});

const absoluteCenterContainer = [
  layoutStyles.horizontalContainer,
  layoutStyles.centerJustify,
  layoutStyles.absolute,
  {width: '100%'}
];

export { layoutStyles, absoluteCenterContainer };