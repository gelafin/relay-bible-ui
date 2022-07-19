import React, { useEffect } from "react";
import { View, Text } from "react-native";

// custom
import { layoutStyles } from "../../assets/stylesheets/layouts";
import { DrawerExpandButton } from "../buttons/DrawerExpandButton";
import { CloseButton } from "../buttons/CloseButton";

const DrawerAppBar = ({contextHeaderText, onClosePress, onExpandPress}) => {
  const closeButton = (
    <CloseButton
      onPress={onClosePress}
      // hide if no callback was passed
      style={!onClosePress && {visibility: 'hidden'}}>
    </CloseButton>
  );
  const expandButtonStyle = !onExpandPress && {visibility: 'hidden'};
  const expandButton = (
    <DrawerExpandButton
      onPress={onExpandPress}
      // hide if no callback was passed
      style={expandButtonStyle}>
    </DrawerExpandButton>
  );

  useEffect(()=> {
    console.log('onExpandPress (should be falsy): ', onExpandPress);
    console.log('negating it should be true > ', !onExpandPress);
    console.log('expecting visibility object to give to style prop: ', !onExpandPress && {visibility: 'hidden'});
  }, [onExpandPress]);

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
