import React, { useState } from "react";
import { View, Text } from "react-native";

// custom styles
import { layoutStyles } from "../../assets/stylesheets/layouts";

// custom components
import { SingletonInputFormText } from "../common/SingletonInputFormText";
import { FormLabel } from "../common/FormLabel";
import { SaveButton } from "../buttons/SaveButton";
import { EditButton } from "../buttons/EditButton";
import { DeleteButton } from "../buttons/DeleteButton";
import { UndoButton } from "../buttons/UndoButton";

const Note = ({title, body, linkedVerseReferences, isPublic}) => {
  const [currentBody, setCurrentBody] = useState(body);
  const [hasChanges, setHasChanges] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleBodyChange = (newText) => {
    setCurrentBody(newText);
    setHasChanges(true);
  };

  const focusEdit = () => {
    console.log('focus input component');
    setIsFocused(true);
    // setIsFocused(false);
  };

  const deleteNote = () => {
    console.log('deleting note with body ', currentBody);
  };

  const saveNote = () => {
    console.log('saving note with body ', currentBody);
    setHasChanges(false);
  };

  const discardChanges = () => {
    console.log('resetting note body to prop/db version');
    setCurrentBody(body);
    setHasChanges(false);
  };

  return (
    <View>
      <FormLabel label={title}></FormLabel>
      {/* TODO: verticalCenter is good for 1-line Notes but not large Notes */}
      <View style={[layoutStyles.container, layoutStyles.horizontalContainer]}>
        <SingletonInputFormText
          handleChange={handleBodyChange}
          currentValue={currentBody}
          flexValue={1}
          multiline
          numberOfLines={2}
          isFocused={isFocused}
        ></SingletonInputFormText>
        <View style={[layoutStyles.horizontalContainer, {flex: 0.1, flexWrap: 'wrap'}]}>
          {!hasChanges && 
            <EditButton onPress={focusEdit}></EditButton>
          }
          {hasChanges &&
            <>
              <UndoButton onPress={discardChanges}></UndoButton>
              <SaveButton onPress={saveNote}></SaveButton>
              <DeleteButton onPress={deleteNote}></DeleteButton>          
            </>
          }
        </View>
      </View>
      <Text>{linkedVerseReferences.join(' ')}</Text>
      {isPublic && <Text>public</Text>}
    </View>
  );
};

export { Note };
