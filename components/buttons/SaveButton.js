import React from "react";
import { IconButton } from "react-native-paper";

// custom styles
import { iconButtonStyle } from "../../assets/stylesheets/buttons";

const SaveButton = ({onPress}) => (
  <IconButton
    icon="content-save"
    mode="text"
    onPress={onPress}
    style={iconButtonStyle}
  ></IconButton>
);

export { SaveButton };
