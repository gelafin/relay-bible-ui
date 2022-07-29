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
  handleChange, currentValue, flexValue, multiline, autoHeight, numberOfLines, isFocused, restoreFocusPower, onFocus, onBlur
}) => {
  const inputRef = useRef(null);
  const [boxHeight, setBoxHeight] = useState(0);
  const [shouldUseAutoHeight, setShouldUseAutoHeight] = useState(false);

  useEffect(() => setShouldUseAutoHeight(!numberOfLines && autoHeight), [numberOfLines, autoHeight]);

  const focusInput = () => {
    const inputLength = currentValue?.length || 0;

    if (inputRef?.current && isFocused) {
      inputRef.current.focus();
      inputRef.current.setSelectionRange(inputLength, inputLength);

      restoreFocusPower();
    }
  };

  const updateHeight = ({nativeEvent}) => {
    setBoxHeight(nativeEvent.contentSize.height);
  };

  useEffect(focusInput, [isFocused, inputRef]);

  return (
    <TextInput
      ref={inputRef}
      onChangeText={handleChange}
      value={currentValue}
      style={[
        inputStyle.default,
        flexValue && {flex: flexValue},
        // overflow: hidden is needed to hide scroll bar, but height is correct
        shouldUseAutoHeight && {height: boxHeight, overflow: 'hidden'}
      ]}
      multiline={multiline}
      numberOfLines={numberOfLines}  // affects Android only
      onContentSizeChange={shouldUseAutoHeight && updateHeight}
      onFocus={onFocus}
      onBlur={onBlur}
    ></TextInput>
  );
};

export { SingletonInputFormText };
