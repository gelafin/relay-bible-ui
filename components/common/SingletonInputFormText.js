import React from "react";
import { TextInput } from "react-native";

import { inputStyle } from "../../assets/stylesheets/inputs";
import { layoutStyles } from "../../assets/stylesheets/layouts";

const SingletonInputFormText = ({handleChange, currentValue, fullScreen}) => {
  return (
    <TextInput
      onChangeText={handleChange}
      value={currentValue}
      style={[inputStyle.default, fullScreen && layoutStyles.fullWidth]}
    ></TextInput>
  );
};

export { SingletonInputFormText };
