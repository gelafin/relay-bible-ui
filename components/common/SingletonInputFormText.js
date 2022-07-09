import React from "react";
import { TextInput } from "react-native";

const SingletonInputFormText = ({handleChange, currentValue}) => {
  return (
    <TextInput onChangeText={handleChange} value={currentValue}></TextInput>
  );
};

export { SingletonInputFormText };
