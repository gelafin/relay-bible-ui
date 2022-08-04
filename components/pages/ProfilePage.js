import { React, useState } from 'react';

// custom components
import { PageHeader } from '../common/PageHeader.js';
import { SingletonInputForm } from '../common/SingletonInputForm.js';
import { SingletonInputFormText } from '../common/SingletonInputFormText.js';
import { SingletonInputFormSelect } from '../common/SingletonInputFormSelect.js';
import { FormSection } from '../common/FormSection.js';
import { PageStyler } from './PageStyler.js';
import { DeleteButton } from '../buttons/DeleteButton.js';
import { ConfirmDialog } from '../common/ConfirmDialog.js';
import { ContextHeader } from '../common/ContextHeader.js';
import { TEST } from '../TEST.js';

const DELETE_PROFILE_DIALOG_DESCRIPTION = 'Your public notes will remain. There\'s nothing you can do about this. Mwahaha <3';

const ProfilePage = () => {
  const [shouldShowDialog, setShouldShowDialog] = useState(false);

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

  const deleteProfile = () => {
    alert('Profile deleted! This will be a toast snack in the future');
  };

  return (
    <>
      <ContextHeader headingText="Top o' the profile page to you, laddies"></ContextHeader>
      <PageHeader headingText="Profile"></PageHeader>
      <PageStyler>
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
        <DeleteButton onPress={()=>{setShouldShowDialog(true)}}>Delete Profile</DeleteButton>

      </PageStyler>
      {shouldShowDialog &&
        <ConfirmDialog
          title="Delete Profile?"
          description={DELETE_PROFILE_DIALOG_DESCRIPTION}
          shouldShowDialog={shouldShowDialog}
          setShouldShowDialog={setShouldShowDialog}
          onConfirm={deleteProfile}
        ></ConfirmDialog>
      }
    </>
  );
}

export { ProfilePage };
