import { React, useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { IconButton } from 'react-native-paper';

/**
 * A labeled text input and a context-sensitive button that submits
 * the input value when the user decides to do so and the value has changed
 */
export default function SingletonInputForm({label, onSubmit, initialValue}) {
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

  return (
    <View>
      <Text><b>{label}</b></Text>
      <TextInput onChangeText={handleChange} value={currentValue}></TextInput>
      <IconButton
        icon={buttonOptions.icon}
        mode="text"
        onPress={handleSavePress}
        style={styles.iconButton}
      ></IconButton>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});