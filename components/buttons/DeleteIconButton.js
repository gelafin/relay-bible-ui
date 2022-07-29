import { React } from 'react';
import { IconButton } from 'react-native-paper';
import { buttonStyle } from '../../assets/stylesheets/buttons.js';

const DeleteIconButton = ({onPress}) => (
  <IconButton
    icon="delete"
    // mode="outlined"
    // style={[buttonStyle.default, buttonStyle.warning]}
    labelStyle={buttonStyle.warningLabel}
    onPress={onPress}
  ></IconButton>
);

export { DeleteIconButton };
