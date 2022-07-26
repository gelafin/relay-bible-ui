import React, { useState } from "react";
import { View, Text } from "react-native";

// custom styles
import { layoutStyles } from "../../assets/stylesheets/layouts";

// custom components
import { SingletonInputFormText } from "../common/SingletonInputFormText";
import { FormLabel } from "../common/FormLabel";
import { SaveButton } from "../buttons/SaveButton";

const Note = ({title, body, linkedVerseReferences, isPublic}) => {
  const [currentBody, setCurrentBody] = useState(body);
  const [actionButtons, setActionButtons] = useState();

  const handleBodyChange = (newText) => {
    setCurrentBody(newText);
  };

  const saveNote = () => {
    console.log('saving note with body ', currentBody);
  };

  return (
    <View>
      <FormLabel label={title}></FormLabel>
      {/* TODO: verticalCenter is good for 1-line Notes but not large Notes */}
      <View style={[layoutStyles.container, layoutStyles.horizontalContainer, layoutStyles.verticalCenter]}>
        <SingletonInputFormText
          handleChange={handleBodyChange}
          currentValue={body}
          fullScreen
          multiline
          numberOfLines={2}
        ></SingletonInputFormText>
        <SaveButton onPress={saveNote}></SaveButton>
      </View>
      <Text>{linkedVerseReferences.join(' ')}</Text>
      {isPublic && <Text>public</Text>}
    </View>
  );
};

export { Note };
