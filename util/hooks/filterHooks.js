import { useState, useEffect } from "react";

import { versesToString } from "../VerseReferenceFormatter";
import * as Api from '../../api/notesApi.js';

/**
 * given stateful filterSettings and username,
 * returns an updated list of the user's notes filtered by filterSettings
 */
export const useFilteredNotesList = (filterSettings, username) => {
  const [notes, setNotes] = useState();

  useEffect(async () => {
    const filteredNotes = await Api.fetchAllNotes(username);

    setNotes(filteredNotes);
  }, [filterSettings]);

  return notes;
};

export const useHeaderText = (selectedVerses, setContextHeaderText) => {
  const newHeaderText = versesToString(selectedVerses)
  || 'All';

  // OR, could just return newHeaderText and let caller set it
  setContextHeaderText(newHeaderText);
};
