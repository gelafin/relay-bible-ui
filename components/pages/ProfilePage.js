import { React } from 'react';
import { StyleSheet, View } from 'react-native';

// custom components
import { PageHeader } from '../common/PageHeader.js';
import { SingletonInputForm } from '../common/SingletonInputForm.js';
import { SingletonInputFormText } from '../common/SingletonInputFormText.js';
import { SingletonInputFormSelect } from '../common/SingletonInputFormSelect.js';
import { FormSection } from '../common/FormSection.js';

const ProfilePage = () => {
  // TODO: these submit handlers could maybe be handled by the SingletonInputForm with an endpoint prop
  const handleUsernameSubmit = (newUserName) => {
    console.log('Profile page submitting new username:', newUserName);
  };

  const handleGospelPersonaSubmit = (newPersona) => {
    console.log('Profile page submitting new gospel persona:', newPersona);
  };

  const handleAffiliationSubmit = (newAffiliation) => {
    console.log('Profile page submitting new affiliation:', newAffiliation);
  };

  return (
    <View style={styles.page}>
      <PageHeader headingText="Profile"></PageHeader>
      <main>
        {/* TODO: I don't want to repeat this style wrapper on every page,
        but bottomNav + theme is being erroneous */}
        <View style={styles.marginLeft}>
          <SingletonInputForm
            label="Username"
            onSubmit={handleUsernameSubmit}
            initialValue="Cheeseyman"
            inputComponent={SingletonInputFormText}
          ></SingletonInputForm>

          <FormSection label="Personas">
            <SingletonInputForm
              label="Gospel Doctrine"
              onSubmit={handleGospelPersonaSubmit}
              initialValue=""
              inputComponent={SingletonInputFormSelect}
              inputComponentProps={[[
                {label: 'option1', value: 'value1'},
                {label: 'option2', value: 'value2'}
              ]]}
            ></SingletonInputForm>

            <SingletonInputForm
              label="Affiliation"
              onSubmit={handleAffiliationSubmit}
              initialValue="valueB"
              inputComponent={SingletonInputFormSelect}
              inputComponentProps={[[
                {label: 'optionA', value: 'valueA'},
                {label: 'optionB', value: 'valueB'}
              ]]}
            ></SingletonInputForm>
          </FormSection>
        </View>
      </main>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#fff',
    // marginLeft: '20px' // you thought this would work, didn't you?
  },
  marginLeft: {
    marginLeft: '20px'
  }
});

export { ProfilePage };
