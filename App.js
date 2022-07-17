import { React } from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// custom components
import { MainNav } from './components/unique/MainNav';

export default function App() {
  return (
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
