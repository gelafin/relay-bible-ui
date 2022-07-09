/*
 * passing prop to prop https://stackoverflow.com/a/48919391/14257952
 */

import { React, useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { IconButton } from 'react-native-paper';

// custom
import { FormLabel } from './FormLabel';

/**
 * A labeled text input and a context-sensitive button that submits
 * the input value when the user decides to do so and the value has changed
 * @param inputComponentProps array of any props to pass to child, e.g., 
 * the options array required for SingletonInputFormSelect
 */
function SingletonInputForm({label, onSubmit, initialValue, inputComponent, inputComponentProps}) {
  // button variant switches between edit, save, and undo
  const [buttonVariant, setButtonVariant] = useState('edit');
  const [buttonOptions, setButtonOptions] = useState({});
  const [currentValue, setCurrentValue] = useState(initialValue);

  // initialize button to edit button
  useEffect(() => {
    setButtonVariant('edit');
  }, []);

  // update these things whenever button variant changes
  useEffect(() => {
    setButtonOptions({
      'icon': buttonIcons[buttonVariant],
      'onPress': buttonPressHandlers[buttonVariant]
    });
  }, [buttonVariant]);

  const buttonIcons = {
    'edit': 'pencil',
    'save': 'content-save'
  };

  const buttonPressHandlers = {
    'edit': null,
    'save': handleSavePress
  };

  const handleChange = (value) => {
    // track current value
    setCurrentValue(value);

    // TODO: if value has actually changed, offer save and undo buttons
    setButtonVariant('save');
  };

  const handleSavePress = () => {
    // TODO: validate here?
    onSubmit(currentValue);

    // reset
    setButtonVariant('edit');

    // TODO: show toast "snack bar"
  }

  // rename component prop
  const InputComponent = inputComponent;

  return (
    <View>
      <FormLabel label={label}></FormLabel>
      <View style={styles.container}>
        <View style={styles.input}>
          <InputComponent
            handleChange={handleChange}
            currentValue={currentValue}
            otherProps={inputComponentProps}
          ></InputComponent>
        </View>
        <IconButton
          icon={buttonOptions.icon}
          mode="text"
          onPress={handleSavePress}
          style={styles.iconButton}
        ></IconButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexFlow: 'row wrap',
    justifyContent: 'flex-start',
  },
  input: {
    backgroundColor: '#eee'
  }
});

export { SingletonInputForm };
