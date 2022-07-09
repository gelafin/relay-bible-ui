import React from "react";
import { Picker } from '@react-native-picker/picker';

import { inputStyle } from "../../assets/stylesheets/inputs";

/**
 * 
 * @param {function} handleChange callback given the new item value on change.
 * Must set currentValue to update this component's input value
 * @param {string} currentValue value of this input, tracked in parent state
 * @param {array} options objects with "label" and "value" used as options
 * @returns 
 */
const SingletonInputFormSelect = ({handleChange, currentValue, otherProps}) => {
  // unpack options
  const [options] = otherProps;
  console.log(options);

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
