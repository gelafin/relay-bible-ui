import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

// custom components
import MainNav from './components/common/MainNav';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        {/* TODO: make this the AppBar? */}
        <View style={styles.offWhite}>
          <Text>Top of the screen</Text>
        </View>
        <MainNav></MainNav>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  plainBackground: {
    backgroundColor: '#fff'
  },
  offWhite: {
    backgroundColor: '#eee'
  }
});
