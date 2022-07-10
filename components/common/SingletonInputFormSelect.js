import React from "react";
import { Picker } from '@react-native-picker/picker';

import { inputStyle } from "../../assets/stylesheets/inputs";

/**
 * 
 * @param {function} handleChange callback given the new item value on change.
 * Must set currentValue to update this component's input value
 * @param {string} currentValue value of this input, tracked in parent state
 * @param {array} otherProps array containing these props specific to the select component:
 * Array of objects with "label" and "value" properties, used as options
 * @returns 
 */
const SingletonInputFormSelect = ({handleChange, currentValue, otherProps}) => {
  // unpack options
  let [options] = otherProps;

  return (
    <Picker
      onValueChange={(itemValue) => {
        handleChange(itemValue);
      }}
      selectedValue={currentValue}
      style={inputStyle.default}
    >
      {options.map(option => (
        <Picker.Item label={option.label} value={option.value} key={option.value} />
      ))}
    </Picker>
  );
};

export { SingletonInputFormSelect };
