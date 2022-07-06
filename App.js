import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import ProfilePage from './components/pages/ProfilePage';
import MainNav from './components/common/MainNav';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}
      >Press me
      </Button>

      <ProfilePage yourNumbers={[1, 2, 3]}></ProfilePage>
      <MainNav></MainNav>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
