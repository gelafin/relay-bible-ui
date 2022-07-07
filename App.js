import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';

// custom components
import MainNav from './components/common/MainNav';

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <Text>Top of the screen</Text>
        <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}
        >Press me
        </Button>

        <MainNav></MainNav>
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
