import { React, useEffect, useState} from "react";
import { Pressable, Text } from "react-native";

// custom
import { layoutStyles } from "../../assets/stylesheets/layouts";
import { textStyles } from "../../assets/stylesheets/text";

const Verse = ({verseText, verseNumber, onSelect, onDeselect}) => {
  const [isSelected, setIsSelected] = useState();
  
  const handleSelect = () => {
    setIsSelected(!isSelected);
  };
  
  useEffect(() => {
    isSelected ? onSelect({text: verseText, number: verseNumber})
      : onDeselect({text: verseText, number: verseNumber});
  }, [isSelected]);
  
  return (
    <Pressable
      style={layoutStyles.inline}
      onPress={handleSelect}
    >
      <Text style={[textStyles, isSelected && textStyles.selectedVerse]}>
        <Text style={textStyles.superscript}>{verseNumber}</Text>
        <Text>{' ' + verseText + ' '}</Text>
      </Text>
    </Pressable>
  );
};

export { Verse };
