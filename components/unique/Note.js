import React from "react";
import { SingletonInputForm } from "../common/SingletonInputForm";
import { SingletonInputFormText } from "../common/SingletonInputFormText";

const Note = ({title, body}) => {
  const saveNote = () => {
    console.log('saving note');
  };

  return (
    <SingletonInputForm
      label={title}
      onSubmit={saveNote}
      initialValue={body}
      inputComponent={SingletonInputFormText}
    ></SingletonInputForm>
  );
};

export { Note };
