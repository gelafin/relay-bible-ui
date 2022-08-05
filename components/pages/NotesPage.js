import { React, useEffect, useState } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';

// custom components
import { PageStyler } from './PageStyler.js';
import { PageHeader } from '../common/PageHeader.js';
import { ContextHeader } from '../common/ContextHeader.js';
import { NoteEditDialog } from '../unique/NoteEditDialog.js';
import { NotesList } from '../unique/NotesList.js';
import { NoteFilterModal } from '../common/NoteFilterModal.js';

// custom utils
import { versesToString } from '../../util/VerseReferenceFormatter.js';
import { BASE_URL } from '../../constants/apiData.js';
import { createVerse } from '../../util/Verse.js';
import * as Api from '../../api/notesApi.js';

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

  /**
   * API interaction
   */
  const fetchNoteData = async () => {
    const freshNotes = await Api.fetchAllNotes();
    setNotes(freshNotes);
  };

  const deleteNote = (noteId) => {
    // TODO: call api
    // const success = await Api.deleteNote();

    setNotes(notes.filter(note => note.id !== noteId));

    // TODO: after api call, update displayed notes
    // fetchNoteData();
  };

  /**
   * @param {*} noteData object in the form {title: string, body: string, linkedVerses: string[], isPublic: bool}
   */
  const createNote = async (noteData) => {
    // TODO: call api
    // const success = await Api.createNote(noteData, userName);

    const notesCopy = [...notes];
    notesCopy.push({...noteData, id: notes[notes.length - 1].id + 1});
    setNotes(notesCopy);

    // TODO: after api call, update displayed notes
    // fetchNoteData();
  };

  const updateNote = async (oldNote, newNote) => {
    // const success = await Api.updateNote(oldNote, newNote, userName);
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

  /**
   * helpers
   */
  const initializeFilterSettings = () => (
    setFilterSettings({
      ...filterSettings,
      selectedVerses: initialSelectedVerseObjects || [],
    })
  );
    
  /**
   * side effect listeners
   */
  // set context header text based on selected verses
  useEffect(() => {
    const {selectedVerses} = filterSettings;

    const newHeaderText = versesToString(selectedVerses)
      || 'All';

    setContextHeaderText(newHeaderText);

    if (filterSettings?.selectedVerses && filterSettings.selectedVerses.length > 0) {
      updateFilteredNotes();
    }
  }, [filterSettings?.selectedVerses]);

  // filter displayed notes based on filter settings
  // (a note should display if any of its linked verses are in filter settings)
  const isInFilterSettings = verseObj => filterSettings.selectedVerses.some(verseObj2 => {
    return verseObj2.equals(verseObj)
  });
  const updateFilteredNotes = () => {
    setNotes(notes.filter(note => note.linkedVerses.some(isInFilterSettings)));
    console.log('NotesPage: updating notes to match settings: ', filterSettings.selectedVerses);
    console.log('NotesPage: new notes: ', notes.filter(note => note.linkedVerses.some(isInFilterSettings)));
  }

  /**
   * handlers
   */
  const handleFilterPress = () => setShowNoteFilterModal(true);
  const handleNewPress = () => setShowNoteCreateDialog(true);

  /**
   * initialization
   */
  useEffect(fetchNoteData, []);
  useEffect(initializeFilterSettings, [initialSelectedVerseObjects]);

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
          <NotesList
            notes={notes}
            deleteNote={deleteNote}
          ></NotesList>
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
          setFilterSettings={setFilterSettings}
        ></NoteFilterModal>
      }
    </>
  );
};
  
export { NotesPage };
