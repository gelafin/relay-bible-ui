import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { layoutStyles, absoluteCenterContainer } from "../../assets/stylesheets/layouts";
import { CloseButton } from "../buttons/CloseButton";

/*
 * selectedVerses: ordered array of verse numbers
 */
const DrawerOptionsFragment = ({currentBook, currentChapter, selectedVerses}) => {
  const [contextHeaderText, setContextHeaderText] = useState();

  const topButton = <CloseButton></CloseButton>

  // update context header text each render
  useEffect(() => {
    let contextHeaderText = `${currentBook} ${currentChapter}:${selectedVerses.slice(0, 1)}`;
    contextHeaderText += selectedVerses?.length > 1 ? ' etc'
      : '';
    setContextHeaderText(contextHeaderText);
  }, [currentBook, currentChapter, selectedVerses]);

  console.log('layout style: ', absoluteCenterContainer);

  return (
    <View>
      <View style={absoluteCenterContainer}>{topButton}</View>
      <View style={layoutStyles.horizontalContainer}>
        <Text>{contextHeaderText}</Text>
      </View>
    </View>
  );
};

export { DrawerOptionsFragment };
