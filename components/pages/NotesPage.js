import { React, useState } from 'react';
import { ScrollView } from 'react-native';

// custom components
import { PageStyler } from './PageStyler.js';
import { PageHeader } from '../common/PageHeader.js';
import { ContextHeader } from '../common/ContextHeader.js';

// If selectedVerses are provided, this is in a drawer.
// When in a drawer, set filter and don't render contextHeader (Drawer does).
// Filter settings are independent of context header when set
const NotesPage = ({initialSelectedVerses}) => {
  const [selectedVerses, setSelectedVerses] = useState(initialSelectedVerses);

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
