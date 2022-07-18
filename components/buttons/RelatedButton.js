import { React } from 'react';
import { Button } from 'react-native-paper';
import { buttonStyle } from '../../assets/stylesheets/buttons.js';

const RelatedButton = ({onPress, children}) => (
  <Button
    mode="contained"
    style={buttonStyle.default}
    labelStyle={buttonStyle.defaultLabel}
    onPress={onPress}
  >{children}</Button>
);

export { RelatedButton };
