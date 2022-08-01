import { React, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';

// custom components
import { PageStyler } from './PageStyler.js';
import { PageHeader } from '../common/PageHeader.js';
import { ContextHeader } from '../common/ContextHeader.js';
import { Note } from '../unique/Note.js';
import { NoteEditDialog } from '../unique/NoteEditDialog.js';

// custom utils
import { versesToString } from '../../util/VerseReferenceFormatter.js';
import axios from 'axios';
import { BASE_URL } from '../../constants/apiData.js';

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
// selectedVerses are in the form [{book: str, chapter: int, number: int}]
// When in a drawer, set filter and don't render contextHeader (Drawer does).
// Filter settings are independent of context header when set
const NotesPage = ({initialSelectedVerses}) => {
  const [filterSettings, setFilterSettings] = useState({});
  const [contextHeaderText, setContextHeaderText] = useState('');
  const [notes, setNotes] = useState([]);
  const [showNoteCreateDialog, setShowNoteCreateDialog] = useState(false);
  const [userName, setUserName] = useState('CTCheeseman');  // TODO: use global state

  const fetchNoteData = async () => {
    // TODO: hit the api
    // const reqUrl = `${BASE_URL}notes/${userName}`;
    // const res = await axios.get(reqUrl);

    setNotes(sampleNotes);
  };

  useEffect(fetchNoteData, []);

  const initializeFilterSettings = () => (
    setFilterSettings({
      ...filterSettings,
      selectedVerses: initialSelectedVerses || [],
    })
  );

  useEffect(initializeFilterSettings, []);

  // set context header text based on selected verses
  useEffect(() => {
    const {selectedVerses} = filterSettings;

    // TODO: create and use temporarily a new versesToString(selectedVerses: obj[])
    const newHeaderText = versesToString(bookName, chapterNumber, selectedVerses)
      || 'All';

    setContextHeaderText(newHeaderText);
  }, [filterSettings?.selectedVerses]);

  const handleFilterPress = () => {
    console.log('filtering...');

    // TODO: show filter form modal, then set filter settings in handleSubmitFilterSettings
    setFilterSettings({...filterSettings, selectedVerses: [{book: 'Matthew', chapter: 5, number: 5}]});
  };

  const handleNewPress = () => {
    console.log('creating new...');
    setShowNoteCreateDialog(true);
  };

  const deleteNote = (noteId) => {
    // TODO: call api

    setNotes(notes.filter(note => note.id !== noteId));

    // TODO: after api call, update displayed notes
    // fetchNoteData();
  };

  /**
   * @param {*} noteData object in the form {title: string, body: string, linkedVerses: string[], isPublic: bool}
   */
  const createNote = async (noteData) => {
    // TODO: call api
    // note from Tim 8/1/22: make sure that it has book_name, chapter_num and verse_num in the linkedVerses string with only a reference to one verse
    const reqUrl = `${BASE_URL}notes/${userName}`;
    const reqBodyData = noteData;

    // const res = await axios.post(reqUrl, reqBodyData);

    const notesCopy = [...notes];
    notesCopy.push({...noteData, id: notes[notes.length - 1].id + 1});
    setNotes(notesCopy);

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
      {showNoteCreateDialog &&
        <NoteEditDialog
          setShouldShowDialog={setShowNoteCreateDialog}
          onCancel={() => setShowNoteCreateDialog(false)}
          onSubmit={createNote}
        ></NoteEditDialog>
      }
    </>
  );
};
  
export { NotesPage };
