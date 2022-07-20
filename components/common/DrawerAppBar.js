import React from "react";
import { View, Text } from "react-native";

// custom
import { layoutStyles } from "../../assets/stylesheets/layouts";
import { DrawerExpandButton } from "../buttons/DrawerExpandButton";
import { CloseButton } from "../buttons/CloseButton";

// if onExpandPress is not passed, expand button will be hidden
const DrawerAppBar = ({contextHeaderText, onClosePress, onExpandPress}) => {
  const closeButton = (
    <CloseButton
      onPress={onClosePress}
      // hide if no callback was passed
      style={!onClosePress && {visibility: 'hidden'}}>
    </CloseButton>
  );

  const expandButton = (
    <DrawerExpandButton
      onPress={onExpandPress}
      isInitiallyUp={true}
      // Hide if no callback was passed.
      hide={!onExpandPress}
    >
    </DrawerExpandButton>
  );

  return (
    <View
      style={[
        layoutStyles.horizontalContainer,
        {justifyContent: 'space-between', marginLeft: '10px', marginRight: '10px'}
      ]}
    >
      <Text>{contextHeaderText}</Text>
      {closeButton}
      {expandButton}
    </View>
  );
};

export { DrawerAppBar };
