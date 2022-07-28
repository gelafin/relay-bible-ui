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
    // ID can be a combo of title and linked verses, and uniqueness can be enforced
    'id': '1',
    'title': 'Note Title Abc',
    'body': 'I think this verse is cool because a comparison can be made between the symbolism of the metaphors of both passages insofar that one applies best practices of exegesis and hermeneutics.',
    'linkedVerses': ['Revelation 2:5'],
    'isPublic': true
  },
  {
    'id': '2',
    'title': 'Note Title 2',
    'body': 'Glory be',
    'linkedVerses': ['Genesis 1:10'],
    'isPublic': false
  },
  {
    'id': '3',
    'title': 'My Note Title',
    'body': 'I think this passage is pretty nice.',
    'linkedVerses': ['Genesis 14:2', 'Psalms 145:100', 'Zechariah 1:3', 'Matthew 5:5'],
    'isPublic': true
  },
  {
    'id': '4',
    'title': 'Grocery list',
    'body': `Captain Crunch Berries\nCaptain Crunch Chocolate\nCaptain Crunch Peanut Butter`,
    'linkedVerses': [],
    'isPublic': true
  },
];

// If selectedVerses are provided, this is in a drawer.
// When in a drawer, set filter and don't render contextHeader (Drawer does).
// Filter settings are independent of context header when set
const NotesPage = ({initialSelectedVerses}) => {
  const [filterSettings, setFilterSettings] = useState({});
  const [contextHeaderText, setContextHeaderText] = useState('');
  const [notes, setNotes] = useState([]);

  const fetchNoteData = () => {
    // TODO: hit the api
    setNotes(sampleNotes);
  };

  useEffect(fetchNoteData, []);

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

  const deleteNote = (noteId) => {
    // TODO: call api

    setNotes(sampleNotes.filter(note => note.id !== noteId));

    // TODO: after api call, update displayed notes
    // fetchNoteData();
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
          {notes.map((note) => (
            <Note
              key={note.id}
              noteId={note.id}
              title={note.title}
              body={note.body}
              linkedVerseReferences={note.linkedVerses}
              isPublic={note.isPublic}
              deleteMe={deleteNote}
            ></Note>
          ))}
        </ScrollView>
      </PageStyler>
    </>
  );
};
  
export { NotesPage };
