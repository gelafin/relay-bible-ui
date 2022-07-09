import React from "react";
import { TextInput } from "react-native";

const SingletonInputFormText = ({handleChange, currentValue}) => {
  return (
    <TextInput onChangeText={handleChange} value={currentValue}
      style={{padding: '5px', backgroundColor: '#eee', borderRadius: '5px'}}></TextInput>
  );
};

export { SingletonInputFormText };
