import React from "react";
import { TextInput } from "react-native";

import { inputStyle } from "../../assets/stylesheets/inputs";
import { layoutStyles } from "../../assets/stylesheets/layouts";

const SingletonInputFormText = ({handleChange, currentValue, fullScreen, multiline, numberOfLines}) => {
  return (
    <TextInput
      onChangeText={handleChange}
      value={currentValue}
      style={[inputStyle.default, fullScreen && layoutStyles.fullWidth]}
      multiline={multiline}
      numberOfLines={numberOfLines}  // Docs say this is an Android only option
    ></TextInput>
  );
};

export { SingletonInputFormText };
