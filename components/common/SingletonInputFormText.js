// useRef code adapted from https://stackoverflow.com/a/62250053/14257952 and React Native docs Jul 2022

import React, { useEffect, useRef, useState } from "react";
import { TextInput } from "react-native";

import { inputStyle } from "../../assets/stylesheets/inputs";

/**
 * @param isFocused programmatically sets focus
 * @param onFocus is called when user sets focus
 * @returns 
 */
const SingletonInputFormText = ({
  handleChange, currentValue, flexValue, multiline, autoHeight, numberOfLines, isFocused, onFocus, onBlur
}) => {
  const inputRef = useRef(null);
  const [boxHeight, setBoxHeight] = useState(32);
  const [shouldUseAutoHeight, setShouldUseAutoHeight] = useState(true);

  useEffect(() => setShouldUseAutoHeight(!numberOfLines && autoHeight), [numberOfLines, autoHeight]);

  const focusInput = () => {
    const inputLength = currentValue?.length || 0;

    if (inputRef?.current && isFocused) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(inputLength, inputLength);
    }
  };

  // DEBUG: does not work
  // const updateHeight = ({nativeEvent}) => {
  //   console.log('setting height based on content size to ', nativeEvent.contentSize.height);
  //   setBoxHeight(nativeEvent.contentSize.height);
  // };

  useEffect(focusInput, [isFocused, inputRef]);

  return (
    <TextInput
      ref={inputRef}
      onChangeText={handleChange}
      value={currentValue}
      style={[
        inputStyle.default,
        flexValue && {flex: flexValue, alignItems: 'stretch'},
        // overflow: hidden is needed to hide scroll bar, but height is correct
        // DEBUG: does not work
        // shouldUseAutoHeight && {height: boxHeight, overflow: 'hidden'}
      ]}
      multiline={multiline}
      numberOfLines={numberOfLines}  // affects Android only
      // DEBUG: does not work
      // onContentSizeChange={shouldUseAutoHeight && updateHeight}
      onFocus={onFocus}
      onBlur={onBlur}
    ></TextInput>
  );
};

export { SingletonInputFormText };
