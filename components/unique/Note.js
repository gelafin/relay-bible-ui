import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

// custom styles
import { layoutStyles } from "../../assets/stylesheets/layouts";

// custom components
import { SingletonInputFormText } from "../common/SingletonInputFormText";
import { FormLabel } from "../common/FormLabel";
import { SaveButton } from "../buttons/SaveButton";
import { EditButton } from "../buttons/EditButton";
import { DeleteIconButton } from "../buttons/DeleteIconButton";
import { UndoButton } from "../buttons/UndoButton";

const Note = ({noteId, title, body, linkedVerseReferences, isPublic, deleteMe}) => {
  const [currentBody, setCurrentBody] = useState(body);
  const [hasChanges, setHasChanges] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const [showDeleteButton, setShowDeleteButton] = useState(false);
  const [showEditButton, setShowEditButton] = useState(true);
  const [numberOfLines, setNumberOfLines] = useState(2);

  /**
   * display management
   */
  const toggleBlurFocusButtons = (showBlurButtons) => {
    console.log(showBlurButtons && 'DEBUG: showing edit button');
    console.log(!showBlurButtons && 'DEBUG: showing delete button');

    setShowEditButton(showBlurButtons);
    setShowDeleteButton(!showBlurButtons);
  };

  /**
   * button press handlers
   */
  const handleEditPress = () => {
    focusEdit();
    
    // DON'T toggle edit/delete button display; focus listener already does
  };

  const handleSavePress = () => {
    saveNote();
    toggleBlurFocusButtons(true);
  };

  const handleUndoPress = () => {
    discardChanges();
    toggleBlurFocusButtons(true);
  };

  /**
   * listener handlers
   */
  const handleBodyChange = (newText) => {
    setCurrentBody(newText);
    setHasChanges(true);
  };

  const handleFocus = () => {
    toggleBlurFocusButtons(false);

    // sync independently tracked flag
    setIsFocused(true);
  };

  const handleBlur = () => {
    // TODO: this is a race condition that should be turned into useEffect somehow
    setTimeout(() => (toggleBlurFocusButtons(true)), 200);

    // sync independently tracked flag
    setIsFocused(false);
  };

  /**
   * helpers
   */
  const focusEdit = () => {
    console.log('focus input component');
    setIsFocused(true);
  };

  const deleteNote = () => {
    console.log('deleting note with body ', currentBody);
    deleteMe(noteId);
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

  /**
   * side effect listeners
   */

  // expand input area on focus
  useEffect(() => {
    console.log('(note with body ', currentBody, ') Note \n\tisFocused? ', isFocused);
    const showLines = isFocused ? 5 : 2;
    
    setNumberOfLines(showLines);
  }, [isFocused]);

  return (
    <View>
      <FormLabel label={title}></FormLabel>
      {/* TODO: verticalCenter is good for 1-line Notes but not large Notes */}
      <View style={[layoutStyles.container, layoutStyles.horizontalContainer]}>
        <View style={[layoutStyles.container, layoutStyles.verticalContainer]}>
          <SingletonInputFormText
            style={{minWidth: '50%'}}
            handleChange={handleBodyChange}
            currentValue={currentBody}
            flexValue={1}
            multiline
            numberOfLines={numberOfLines}
            // autoHeight  // TODO: setting this (and multiline) based on isFocused doesn't work, because autoHeight depends on onContentSizeChange event, which does not fire on focus
            isFocused={isFocused}
            onFocus={handleFocus}
            onBlur={handleBlur}
          ></SingletonInputFormText>
          <Text style={{fontStyle: 'italic'}}>{linkedVerseReferences.join(' ')}</Text>
          {isPublic && <Text style={{fontStyle: 'italic'}}>public</Text>}
        </View>

        {/* TODO: maxWidth: min-content lets buttons wrap, but it causes a vertical default, which is not wanted.
        This should be changed to a media query where the default button View is row wrap atop the note text input,
        and at a min-width breakpoint is changed to row wrap at the right of the text input */}
        <View style={[layoutStyles.horizontalContainer, {flexWrap: 'wrap', maxWidth: 'min-content'}]}>
          {showEditButton && 
            <EditButton onPress={handleEditPress}></EditButton>
          }
          {hasChanges &&
            <>
              <UndoButton onPress={handleUndoPress}></UndoButton>
              <SaveButton onPress={handleSavePress}></SaveButton>
            </>
          }
          {showDeleteButton &&
            <DeleteIconButton onPress={deleteNote}></DeleteIconButton>
          }
        </View>
      </View>
    </View>
  );
};

export { Note };
