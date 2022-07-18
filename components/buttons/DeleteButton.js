import { React } from 'react';
import { Button } from 'react-native-paper';
import { buttonStyle } from '../../assets/stylesheets/buttons.js';

const DeleteButton = ({onPress, children}) => (
  <Button
    icon="delete"
    mode="outlined"
    style={[buttonStyle.default, buttonStyle.warning]}
    labelStyle={buttonStyle.warningLabel}
    onPress={onPress}
  >{children}</Button>
);

export { DeleteButton };
