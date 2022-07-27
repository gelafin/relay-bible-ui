import React from "react";
import { TextInput } from "react-native";

import { inputStyle } from "../../assets/stylesheets/inputs";

const SingletonInputFormText = ({handleChange, currentValue, flexValue, multiline, numberOfLines}) => {
  return (
    <TextInput
      onChangeText={handleChange}
      value={currentValue}
      style={[inputStyle.default, flexValue && {flex: flexValue}]}
      multiline={multiline}
      numberOfLines={numberOfLines}  // Docs say this is an Android only option
    ></TextInput>
  );
};

export { SingletonInputFormText };
