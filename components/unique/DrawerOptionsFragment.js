import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { layoutStyles, absoluteCenterContainer, zIndexBreakpoints } from "../../assets/stylesheets/layouts";
import { CloseButton } from "../buttons/CloseButton";
import { RelatedButton } from "../buttons/RelatedButton";

const MAX_TOP_BUTTON_HEIGHT = 41;

/*
 * selectedVerses: ordered array of verse numbers
 */
const DrawerOptionsFragment = ({currentBook, currentChapter, selectedVerses, onClosePress}) => {
  const [contextHeaderText, setContextHeaderText] = useState();

  const topButton = <CloseButton onPress={onClosePress}></CloseButton>

  // update context header text each render
  useEffect(() => {
    let contextHeaderText = `${currentBook} ${currentChapter}:${selectedVerses.slice(0, 1)}`;
    contextHeaderText += selectedVerses?.length > 1 ? ' etc'
      : '';
    setContextHeaderText(contextHeaderText);
  }, [currentBook, currentChapter, selectedVerses]);

  const handleRelatedNotesPress = () => {
    console.log('navigating to Related Notes');
  };

  const handleRelatedCommentaryPress = () => {
    console.log('navigating to Related Commentary');
  };

  return (
    <View>
      <View
        style={[
          absoluteCenterContainer,
          {zIndex: zIndexBreakpoints.LEVEL_2 + 1, maxHeight: MAX_TOP_BUTTON_HEIGHT}
        ]}
      >{topButton}</View>
      {/* This context header View's height controls where the Related buttons are.
      Its height must be greater than the topButton View, or the topButton View will be covered */}
      <View style={[layoutStyles.horizontalContainer, {minHeight: MAX_TOP_BUTTON_HEIGHT + 1}]}>
        <Text>{contextHeaderText}</Text>
      </View>
      {/* TODO: instead of alignSelf, put invisible spacers on the left,
      same width as the left two MainNav buttons. Then rename buttons to just "related" */}
      <View style={[layoutStyles.horizontalContainer, {alignSelf: 'flex-end'}]}>
        <RelatedButton
          onPress={handleRelatedNotesPress}
        >Related Notes</RelatedButton>
        <RelatedButton
          onPress={handleRelatedCommentaryPress}
        >Related Commentary</RelatedButton>
      </View>
    </View>
  );
};

export { DrawerOptionsFragment };
