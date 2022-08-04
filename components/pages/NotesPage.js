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
import { NoteFilterModal } from '../common/NoteFilterModal.js';
import { createVerse } from '../../util/Verse.js';

export const sampleNotes = [
  {
    // ID can be a combo of title and linked verses, and uniqueness can be enforced
    'id': '1',
    'title': 'Note Title Abc',
    'body': 'I think this verse is cool because a comparison can be made between the symbolism of the metaphors of both passages insofar that one applies best practices of exegesis and hermeneutics.',
    'linkedVerses': [createVerse('Revelation', 2, 5)],
    'isPublic': true
  },
  {
    'id': '2',
    'title': 'Note Title 2',
    'body': 'Glory be',
    'linkedVerses': [createVerse('Genesis', 1, 10)],
    'isPublic': false
  },
  {
    'id': '3',
    'title': 'My Note Title',
    'body': 'I think this passage is pretty nice.',
    'linkedVerses': [createVerse('Genesis', 14, 2), createVerse('Psalms', 145, 100), createVerse('Zechariah', 1, 3), createVerse('Matthew', 5, 5)],
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
// selectedVerses are in the form [{bookName: str, chapterNumber: int, verseNumber: int}]
// When in a drawer, set filter and don't render contextHeader (Drawer does).
// Filter settings are independent of context header when set
const NotesPage = ({initialSelectedVerseObjects}) => {
  const [filterSettings, setFilterSettings] = useState({});
  const [contextHeaderText, setContextHeaderText] = useState('');
  const [notes, setNotes] = useState([]);
  const [showNoteCreateDialog, setShowNoteCreateDialog] = useState(false);
  const [showNoteFilterModal, setShowNoteFilterModal] = useState(false);
  const [userName, setUserName] = useState('CTCheeseman');  // TODO: use global state

  const fetchNoteData = async () => {
    // TODO: hit the api
    // const reqUrl = `${BASE_URL}notes/${userName}`;
    // const res = await axios.get(reqUrl);

    setNotes(sampleNotes);
  };

  useEffect(fetchNoteData, []);

  const initializeFilterSettings = () => (
    // DEBUG
    setFilterSettings({selectedVerses: [{reference: 'DEFAULT pleeeease override this'}]})

    // setFilterSettings({
    //   ...filterSettings,
    //   selectedVerses: initialSelectedVerseObjects || [],
    // })
  );

  // DEBUG
  useEffect(() => console.log('\t** NotesPage: filter settings changed **', filterSettings), [filterSettings]);

  // DEBUG
  // useEffect(initializeFilterSettings, []);
  useEffect(() => {
    console.log('**initializing filter settings in NotesPage**');
    initializeFilterSettings();
  }, []);

  // set context header text based on selected verses
  useEffect(() => {
    const {selectedVerses} = filterSettings;

    const newHeaderText = versesToString(selectedVerses)
      || 'All';

    setContextHeaderText(newHeaderText);
  }, [filterSettings?.selectedVerses]);

  const handleFilterPress = () => setShowNoteFilterModal(true);

  const handleNewPress = () => {
    console.log('creating new...');
    setShowNoteCreateDialog(true);
  };

  const deleteNote = (noteId) => {
    // TODO: call api
    /**
     * note from Tim 8/1/22: send DELETE to /notes/:username with body 
    {
      "title": "string",
      "body": "string"
    }
     */

    setNotes(notes.filter(note => note.id !== noteId));

    // TODO: after api call, update displayed notes
    // fetchNoteData();
  };

  /**
   * @param {*} noteData object in the form {title: string, body: string, linkedVerses: string[], isPublic: bool}
   */
  const createNote = async (noteData) => {
    // TODO: call api at POST /api/notes/:username
    /* note from Tim 8/1/22: make sure that it has this form, with reference to only one verse for now
     {
      "title": "string",
      "body": "This is such an incredible verse",
      "linkedVerses": ["John", 3, 16],
      "isPublic": true
     }
     */
    const reqUrl = `${BASE_URL}notes/${userName}`;
    const reqBodyData = noteData;

    // const res = await axios.post(reqUrl, reqBodyData);

    const notesCopy = [...notes];
    notesCopy.push({...noteData, id: notes[notes.length - 1].id + 1});
    setNotes(notesCopy);

    // TODO: after api call, update displayed notes
    // fetchNoteData();
  };

  const editNote = async () => {
    // TODO
    // note from Tim 8/1/22: send PUT to /api/notes/:username with body {oldTitle: string, newTitle: string, oldBody: string, newBody: string, isPublic: bool}
  };

  const updateNote = async () => {
    /** note from Tim 8/1/22: send PUT to /api/notes/:username with body
    {
      "oldTitle": "string",
      "newTitle": "string",
      "oldBody": "This is such an incredible verse",
      "newBody": "This is really such an incredible verse",
      "linkedVerses": ["John", 3, 16],
      "isPublic": true
    }
     */
  };

  return (
    <>
      {/* If initialSelectedVerses are provided, this component is in a drawer,
          so don't show header */}
      {!initialSelectedVerseObjects && <ContextHeader headingText={contextHeaderText}></ContextHeader>}
      <PageHeader
        headingText="My Notes"
        onFilterPress={!initialSelectedVerseObjects && handleFilterPress}
        onNewPress={handleNewPress}
      ></PageHeader>
      <PageStyler>
        <ScrollView scrollEnabled="true">
          {notes.map((note) => (
            <Note
              key={note.id}
              noteId={note.id}
              title={note.title}
              body={note.body}
              linkedVerseReferences={note.linkedVerses.map(verseObj => verseObj.reference)}
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
      {showNoteFilterModal &&
        <NoteFilterModal
          setShouldShowDialog={setShowNoteFilterModal}
          onCancel={() => setShowNoteFilterModal(false)}
          filterSettings={filterSettings}
          setFilterSettings={newSettings => {console.log('**NotesPage: new filter settings** ', newSettings); setFilterSettings(newSettings)}}
        ></NoteFilterModal>
      }
    </>
  );
};
  
export { NotesPage };
