import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";

/*
 * selectedVerses: ordered array of verse numbers
 */
const DrawerOptionsFragment = ({currentBook, currentChapter, selectedVerses}) => {
  const [contextHeaderText, setContextHeaderText] = useState();

  // update context header text each render
  useEffect(() => {
    let contextHeaderText = `${currentBook} ${currentChapter}:${selectedVerses.slice(0, 1)}`;
    contextHeaderText += selectedVerses?.length > 1 ? ' etc'
      : '';
    setContextHeaderText(contextHeaderText);
  }, [currentBook, currentChapter, selectedVerses]);

  return (
    <View>
      <Text>{contextHeaderText}</Text>
    </View>
  );
};

export { DrawerOptionsFragment };
