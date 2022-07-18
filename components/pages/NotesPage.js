import { React, useState } from 'react';
import { ScrollView } from 'react-native';

// custom components
import { PageStyler } from './PageStyler.js';
import { PageHeader } from '../common/PageHeader.js';
import { ContextHeader } from '../common/ContextHeader.js';

// if selectedVerses are provided, set filter and don't render contextHeader (Drawer does).
// Filter controls context heading
const NotesPage = ({selectedVerses}) => {
  return (
    <>
      <ContextHeader>{selectedVerses}</ContextHeader>
      <PageHeader headingText="My Notes"></PageHeader>
      <PageStyler>
        <ScrollView scrollEnabled='true'>
          
        </ScrollView>
      </PageStyler>
    </>
  );
};
  
export { NotesPage };
