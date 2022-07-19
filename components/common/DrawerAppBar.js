import React, { useEffect } from "react";
import { View, Text } from "react-native";

// custom
import { layoutStyles } from "../../assets/stylesheets/layouts";
import { DrawerExpandButton } from "../buttons/DrawerExpandButton";
import { CloseButton } from "../buttons/CloseButton";

// TODO: tried this; didn't set transform at all, even though online examples match this exactly.
// Also tried iconColor. Set in component profiler but had no effect at all.
// Also tried disabled={true}, which had no effect at all
// Clicking it disabled both buttons due to a silent error...
// React Native does not support visibility: 'hidden' as of Jul 2022
const HIDE_HACK = {transform: [{translateY: 100}]};

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
      // hide if no callback was passed
      iconColor='transparent'
      disabled={true}
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
