import { React } from 'react';
import { IconButton } from 'react-native-paper';

const CloseButton = ({onPress}) => (
  <IconButton
    icon="close"
    size={20}
    onPress={onPress}
  ></IconButton>
);

export { CloseButton };
