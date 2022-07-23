import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { layoutStyles } from "../../assets/stylesheets/layouts";
import { RelatedButton } from "../buttons/RelatedButton";
import { DrawerAppBar } from "../common/DrawerAppBar";
import { versesToString } from "../../util/VerseReferenceFormatter";

/*
 * small area with option buttons you can put in a drawer; counterpart to full-page DrawerPage
 * selectedVerses: ordered array of verse numbers
 */
const DrawerOptionsFragment = ({currentBook, currentChapter, selectedVerses, onClosePress, onRelatedNotesPress, onRelatedCommentaryPress}) => {
  const [contextHeaderText, setContextHeaderText] = useState();

  // update context header text each render
  useEffect(() => {
    let contextHeaderText = versesToString(currentBook, currentChapter, selectedVerses);

    setContextHeaderText(contextHeaderText);
  }, [currentBook, currentChapter, selectedVerses]);

  return (
    <View>
      <DrawerAppBar
        contextHeaderText={contextHeaderText}
        onClosePress={onClosePress}
      ></DrawerAppBar>
      {/* TODO: instead of alignSelf, put invisible spacers on the left,
      same width as the left two MainNav buttons. Then rename buttons to just "related" */}
      <View style={[layoutStyles.horizontalContainer, {alignSelf: 'flex-end'}]}>
        <RelatedButton
          onPress={onRelatedNotesPress}
        >Related Notes</RelatedButton>
        <RelatedButton
          onPress={onRelatedCommentaryPress}
        >Related Commentary</RelatedButton>
      </View>
    </View>
  );
};

export { DrawerOptionsFragment };
