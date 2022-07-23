import React from "react";
import { View } from "react-native";
import { layoutStyles } from "../../assets/stylesheets/layouts";
import { RelatedButton } from "../buttons/RelatedButton";

/*
 * small area with option buttons you can put in a drawer; counterpart to full-page DrawerPage
 */
const DrawerOptionsFragment = ({onRelatedNotesPress, onRelatedCommentaryPress}) => {
  return (
    <View>
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
