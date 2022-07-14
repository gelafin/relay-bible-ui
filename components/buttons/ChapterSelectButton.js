import { React } from 'react';
import { Button } from 'react-native-paper';
import { buttonStyle } from '../../assets/stylesheets/buttons.js';
import { textStyles } from '../../assets/stylesheets/text.js';

const ChapterSelectButton = ({onPress, label}) => (
  <Button
    mode="outlined"
    uppercase={false}
    style={[buttonStyle.default, buttonStyle.chip, buttonStyle.transparent]}
    labelStyle={textStyles.plain}
    onPress={onPress}
  >{label}</Button>
);

export { ChapterSelectButton };
