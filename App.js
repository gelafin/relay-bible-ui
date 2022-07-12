import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { Provider as PaperThemeProvider } from 'react-native-paper';

// custom components
import { MainNav } from './components/common/MainNav';

// TODO: why theme causes errors?
// adapted from docs Jul 2022
// const theme = {
//   colors: {
//     primary: '#3498db',
//     secondary: '#f1c40f',
//     tertiary: '#a1b2c3',
//     background: '#fff'
//   },
// };

export default function App() {
  return (
    // TODO: why theme causes errors?
    // But theme must be used, because it's the only way to style MainNav's 
    // janky material-bottom-tabs (the other nav library is even worse)
    // <PaperThemeProvider theme={theme}>
    <NavigationContainer>
      <View style={styles.container}>
        <MainNav></MainNav>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
