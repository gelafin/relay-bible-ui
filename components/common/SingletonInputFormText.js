import React from "react";
import { TextInput } from "react-native";

import { inputStyle } from "../../assets/stylesheets/inputs";

const SingletonInputFormText = ({handleChange, currentValue}) => {
  return (
    <TextInput onChangeText={handleChange} value={currentValue} style={inputStyle.default}></TextInput>
  );
};

export { SingletonInputFormText };
