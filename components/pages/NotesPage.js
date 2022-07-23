import { React, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

// custom components
import { PageStyler } from './PageStyler.js';
import { PageHeader } from '../common/PageHeader.js';
import { ContextHeader } from '../common/ContextHeader.js';
import { Note } from '../unique/Note.js';

// custom utils
import { versesToString } from '../../util/VerseReferenceFormatter.js';

const sampleNotes = [
  {
    'title': 'Note Title Abc',
    'body': 'I think this verse is cool because a comparison can be made between the symbolism of the metaphors of both passages insofar that one applies best practices of exegesis and hermeneutics.'
  },
  {
    'title': 'Note Title 2',
    'body': 'Glory be'
  },
  {
    'title': 'My Note Title',
    'body': 'I think this passage is pretty nice.'
  },
  {
    'title': 'Grocery list',
    'body': `Captain Crunch Berries\nCaptain Crunch Chocolate\nCaptain Crunch Peanut Butter`
  },
];

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
    const newHeaderText = versesToString(bookName, chapterNumber, selectedVerses)
      || 'All';

    setContextHeaderText(newHeaderText);
  }, [filterSettings?.selectedVerses]);

  const handleFilterPress = () => {
    console.log('filtering...');
    // TODO: show filter form modal, then set filter settings in handleSubmitFilterSettings
    setFilterSettings({...filterSettings, bookName: 'Jeremiah', chapterNumber: 5, selectedVerses: [7, 8, 9, 20]});
  };

  const handleNewPress = () => {
    console.log('creating new...');
  };

  return (
    <>
      {/* If initialSelectedVerses are provided, this component is in a drawer,
          so don't show header */}
      {!initialSelectedVerses && <ContextHeader headingText={contextHeaderText}></ContextHeader>}
      <PageHeader
        headingText="My Notes"
        onFilterPress={!initialSelectedVerses && handleFilterPress}
        onNewPress={!initialSelectedVerses && handleNewPress}
      ></PageHeader>
      <PageStyler>
        <ScrollView scrollEnabled="true">
          {sampleNotes.map((note, index) => (
            <Note
              key={'note' + index}
              title={note.title}
              body={note.body}
            ></Note>
          ))}
        </ScrollView>
      </PageStyler>
    </>
  );
};
  
export { NotesPage };
