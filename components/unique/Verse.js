import { React, useEffect, useState} from "react";
import { Pressable, Text } from "react-native";

// custom
import { layoutStyles } from "../../assets/stylesheets/layouts";
import { textStyles } from "../../assets/stylesheets/text";

const Verse = ({verseText, verseNumber, onVersePress, isSelected}) => {  
  return (
    <Pressable
      style={layoutStyles.inline}
      onPress={() => {onVersePress({text: verseText, number: verseNumber})}}
    >
      <Text style={[textStyles, isSelected && textStyles.selectedVerse]}>
        <Text style={textStyles.superscript}>{verseNumber}</Text>
        <Text>{' ' + verseText + ' '}</Text>
      </Text>
    </Pressable>
  );
};

export { Verse };
