import { React } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import PageHeader from '../common/PageHeader.js';

const ProfilePage = () => {
  return (
    <View>
      <PageHeader headingText="Profile"></PageHeader>
      <main>
        <View style={[styles.container, styles.pageBody]}>
          <Text>hi, Mr. Cheese Man, sir! Nice profile you have here on this here Profiiiiiile Paaaage</Text>
        </View>
      </main>
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
  pageBody: {
    width: '50%',
    backgroundColor: 'pink'
  }
});

export default ProfilePage;
