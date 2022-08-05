import { React, useState } from 'react';
import { ScrollView } from 'react-native';

// custom components
import { PageStyler } from './PageStyler.js';
import { PageHeader } from '../common/PageHeader.js';
import { ContextHeader } from '../common/ContextHeader.js';
import { NotesList } from '../unique/NotesList.js';

// if selectedVerses are provided, set filter and don't render contextHeader (Drawer does).
// Filter controls context heading
const CommentaryPage = ({initialSelectedVerses}) => {
  const [selectedVerses, setSelectedVerses] = useState(initialSelectedVerses);

  return (
    <>
      <ContextHeader>{selectedVerses}</ContextHeader>
      <PageHeader headingText="Commentary"></PageHeader>
      <PageStyler>
        <ScrollView scrollEnabled='true'>
          <NotesList
            
          ></NotesList>
        </ScrollView>
      </PageStyler>
    </>
  );
};

export { CommentaryPage };