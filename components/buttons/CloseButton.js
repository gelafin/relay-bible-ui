import { React } from 'react';
import { Button, IconButton } from 'react-native-paper';
import { buttonStyle } from '../../assets/stylesheets/buttons.js';
import { textStyles } from '../../assets/stylesheets/text.js';

const CloseButton = ({onPress}) => (
//   <Button
//     mode="outlined"
//     uppercase={false}
//     style={[buttonStyle.default, buttonStyle.chip, buttonStyle.transparent]}
//     labelStyle={textStyles.plain}
//     onPress={onPress}
//   >{label}</Button>
  <IconButton
    icon="close"
    // iconColor={}
    size={20}
    onPress={onPress}
  ></IconButton>

);

export { CloseButton };
