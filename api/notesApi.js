/**
 * Defines functions used to interact with the API, for notes
 */

import axios from "axios";

// custom util
import { BASE_URL } from "../constants/apiData";
import { createVerse } from "../util/Verse";
 
const sampleNotes = [
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
 
/**
  * Gets data for all Notes of a User from the database and returns a promise with the data
  */
export const fetchAllNotes = async (userName) => {
  // TODO: hit the api
  // const reqUrl = `${BASE_URL}notes/${userName}`;
  // const res = await axios.get(reqUrl);
 
  return sampleNotes;
};
 
/**
  * Adds a new Note to the database and returns a promise with a bool for success/fail
  * @param noteData object in the form {title: string, body: string, linkedVerses: string[], isPublic: bool}
  * @return bool indicating success
  */
export const createNote = async (noteData, username) => {
  // TODO: call api at POST /api/notes/:username
  // TODO: using the note id would be fine
  /* note from Tim 8/1/22: make sure that it has this form, with reference to only one verse for now
      {
       "title": "string",
       "body": "This is such an incredible verse",
       "linkedVerses": ["John", 3, 16],
       "isPublic": true
      }
      */
  //   const reqUrl = `${BASE_URL}notes/${username}`;
  //   const reqBodyData = noteData;
  //   const res = await axios.post(reqUrl, reqBodyData);
  return true;
};
 
/**
  * Updates a Note in the database and returns a promise with a bool indicating success
  * @param oldNoteData {title: str, body: str, isPublic: bool, linkedVerses: createVerse()[]}
  * @param newNoteData {title: str, body: str, isPublic: bool, linkedVerses: createVerse()[]}
  * @return bool indicating success
  */
export const updateNote = async (oldNoteData, newNoteData, username) => {
  /** note from Tim 8/1/22: send PUT to /api/notes/:username with body
    *   // TODO: using the note id would be fine
     {
       "oldTitle": "string",
       "newTitle": "string",
       "oldBody": "This is such an incredible verse",
       "newBody": "This is really such an incredible verse",
       "linkedVerses": ["John", 3, 16],  // TODO: api only handles one verse for now
       "isPublic": true
     }
     */
  return true;
};
 
/**
  * Deletes a Note from the database and returns a promise with a bool indicating success
  * @return bool indicating success
  */
export const deleteNote = async (username, noteId) => {
  // TODO: call api
  // TODO: using the note id would be fine
  /**
     * note from Tim 8/1/22: send DELETE to /notes/:username with body 
     {
       "title": "string",
       "body": "string"
     }
   */
  return true;
};
 