import { React, useEffect, useState } from 'react';
import { ScrollView, Text } from 'react-native';

// custom components
import { PageStyler } from './PageStyler.js';
import { PageHeader } from '../common/PageHeader.js';
import { ContextHeader } from '../common/ContextHeader.js';
import { versesToString } from '../../util/VerseReferenceFormatter.js';

// If selectedVerses are provided, this is in a drawer.
// When in a drawer, set filter and don't render contextHeader (Drawer does).
// Filter settings are independent of context header when set
const NotesPage = ({initialSelectedVerses}) => {
  const [filterSettings, setFilterSettings] = useState({});
  const [contextHeaderText, setContextHeaderText] = useState('');

  const initializeFilterSettings = () => (
    setFilterSettings({
      ...filterSettings,
      selectedVerses: initialSelectedVerses || [],
      bookName: '',
      chapterNumber: 0
    })
  );

  useEffect(initializeFilterSettings, []);

  // set context header text based on selected verses
  useEffect(() => {
    const {selectedVerses, bookName, chapterNumber} = filterSettings;
    const newHeaderText = versesToString(bookName, chapterNumber, selectedVerses);

    setContextHeaderText(newHeaderText);
  }, [filterSettings?.selectedVerses]);

  return (
    <>
      {/* If initialSelectedVerses are provided, this component is in a drawer,
          so don't show header */}
      {!initialSelectedVerses && <ContextHeader>{contextHeaderText}</ContextHeader>}
      <PageHeader headingText="My Notes"></PageHeader>
      <PageStyler>
        <ScrollView scrollEnabled="true">
          <Text>Test</Text>
        </ScrollView>
      </PageStyler>
    </>
  );
};
  
export { NotesPage };
