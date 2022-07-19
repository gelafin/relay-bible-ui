import { React, useState } from 'react';
import { IconButton } from 'react-native-paper';

const icons = {
  'UP': 'chevron-up',
  'DOWN': 'chevron-up'
};

const DrawerExpandButton = ({onPress, isInitiallyUp}) => {
  const [isUp, setIsUp] = useState(isInitiallyUp);

  const handlePress = () => {
    setIsUp(!isUp);
    onPress();
  };

  return (
    <IconButton
      icon={isUp ? icons.UP : icons.DOWN}
      size={20}
      onPress={handlePress}
    ></IconButton>
  );
};

export { DrawerExpandButton };
