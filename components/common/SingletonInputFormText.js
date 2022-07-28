// useRef code adapted from https://stackoverflow.com/a/62250053/14257952 and React Native docs Jul 2022

import React, { useEffect, useRef } from "react";
import { TextInput } from "react-native";

import { inputStyle } from "../../assets/stylesheets/inputs";

const SingletonInputFormText = ({handleChange, currentValue, flexValue, multiline, numberOfLines, isFocused}) => {
  const inputRef = useRef(null);

  const focusInput = () => {
    const inputLength = currentValue?.length || 0;

    if (inputRef?.current && isFocused) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(inputLength, inputLength);
    }
  };

  useEffect(focusInput, [isFocused, inputRef]);

  return (
    <TextInput
      ref={inputRef}
      onChangeText={handleChange}
      value={currentValue}
      style={[inputStyle.default, flexValue && {flex: flexValue}]}
      multiline={multiline}
      numberOfLines={numberOfLines}  // Docs say this is an Android only option
    ></TextInput>
  );
};

export { SingletonInputFormText };
