import React from "react";
import { IconButton } from "react-native-paper";

// custom styles
import { iconButtonStyle } from "../../assets/stylesheets/buttons";

const EditButton = ({onPress}) => (
  <IconButton
    icon="pencil"
    mode="text"
    onPress={onPress}
    style={iconButtonStyle}
  ></IconButton>
);

export { EditButton };
