import { React, useEffect, useState } from 'react';
import { IconButton } from 'react-native-paper';

// custom
import { buttonStyle } from '../../assets/stylesheets/buttons';

const icons = {
  'UP': 'chevron-up',
  'DOWN': 'chevron-up'
};

const colors = {
  'HIDDEN': 'transparent',
  'DEFAULT': buttonStyle.default.backgroundColor
};

const DrawerExpandButton = ({onPress, isInitiallyUp, hide}) => {
  const [isUp, setIsUp] = useState(isInitiallyUp);
  const [iconColor, setIconColor] = useState();
  const [disabled, setDisabled] = useState(true);

  const handlePress = () => {
    setIsUp(!isUp);
    onPress();
  };

  useEffect(() => {
    setDisabled(hide);
    setIconColor(hide ? colors.HIDDEN : colors.DEFAULT);
  }, [hide]);

  return (
    <IconButton
      icon={isUp ? icons.UP : icons.DOWN}
      size={20}
      onPress={handlePress}
      // React Native does not support visibility: 'hidden' as of Jul 2022,
      // but setting color to transparent and disabled to true effectively hides the button
      color={iconColor}
      iconColor={iconColor}  // ver 5.x rename of color prop
      disabled={disabled}
    ></IconButton>
  );
};

export { DrawerExpandButton };
