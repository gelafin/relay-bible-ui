import React from "react";
import { IconButton } from "react-native-paper";

// custom styles
import { iconButtonStyle } from "../../assets/stylesheets/buttons";

const UndoButton = ({onPress}) => (
  <IconButton
    icon="undo"
    mode="text"
    onPress={onPress}
    style={iconButtonStyle}
  ></IconButton>
);

export { UndoButton };
