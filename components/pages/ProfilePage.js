import { React } from 'react';
import { StyleSheet, View } from 'react-native';

// custom components
import PageHeader from '../common/PageHeader.js';
import SingletonInputForm from '../common/SingletonInputForm.js';

const ProfilePage = () => {
  // TODO: this could maybe be handled by the SingletonInputForm with an endpoint prop
  const handleUsernameSubmit = (newUserName) => {
    console.log('Profile page submitting new username:', newUserName);
  };

  return (
    <View style={styles.page}>
      <PageHeader headingText="Profile"></PageHeader>
      <main>
        <SingletonInputForm
          label="Username"
          onSubmit={handleUsernameSubmit}
          initialValue="Cheeseyman"
        ></SingletonInputForm>
      </main>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

export default ProfilePage;
