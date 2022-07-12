import { React } from 'react';

// custom components
import { PageHeader } from '../common/PageHeader.js';
import { SingletonInputForm } from '../common/SingletonInputForm.js';
import { SingletonInputFormText } from '../common/SingletonInputFormText.js';
import { SingletonInputFormSelect } from '../common/SingletonInputFormSelect.js';
import { FormSection } from '../common/FormSection.js';
import { PageStyler } from './PageStyler.js';
import { DeleteButton } from '../buttons/DeleteButton.js';

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
    <PageStyler>
      <PageHeader headingText="Profile"></PageHeader>
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
          initialValue="undecided"
          inputComponent={SingletonInputFormSelect}
          inputComponentProps={[[
            {label: 'Undecided', value: 'undecided'},
            {label: 'Grace', value: 'grace'},
            {label: 'Grace Plus Response', value: 'gracePlusResponse'},
            {label: 'Not Listed', value: 'notListed'}
          ]]}
        ></SingletonInputForm>
        <SingletonInputForm
          label="Affiliation"
          onSubmit={handleAffiliationSubmit}
          initialValue="mormon"
          inputComponent={SingletonInputFormSelect}
          inputComponentProps={[[
            {label: 'Undecided', value: 'undecided'},
            {label: 'Church of Jesus Christ (Mormon)', value: 'mormon'},
            {label: 'Protestant', value: 'protestant'},
            {label: 'Not Listed', value: 'notListed'}
          ]]}
        ></SingletonInputForm>
      </FormSection>
      <DeleteButton onPress={() => {console.log('pressed the scary red button');}}>Delete Profile</DeleteButton>
    </PageStyler>
  );
}

export { ProfilePage };
