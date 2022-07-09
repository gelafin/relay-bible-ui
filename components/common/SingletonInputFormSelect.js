import React from "react";
import { Picker } from '@react-native-picker/picker';

const SingletonInputFormSelect = ({handleChange, currentValue}) => {
  return (
    <Picker
      onValueChange={(itemValue, itemIndex) => {
        handleChange(itemValue);
      }}
      selectedValue={currentValue}
    >
      <Picker.Item label="test option 1" value="testOptionValue1" />
      <Picker.Item label="test option 2" value="testOptionValue2" />
    </Picker>
  );
};

export { SingletonInputFormSelect };
