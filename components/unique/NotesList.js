import React from "react";
import { Note } from "./Note";

const NotesList = ({notes, deleteNote}) => (
  <>
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
  </>
);

export { NotesList };
