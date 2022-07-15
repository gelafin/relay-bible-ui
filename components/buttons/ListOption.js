import React from "react";
import { Text, TouchableOpacity } from "react-native";

// custom
import { layoutStyles } from "../../assets/stylesheets/layouts";
import { textStyles } from "../../assets/stylesheets/text";

const ListOption = ({label, onPress, isSelected}) => (
  <TouchableOpacity
    style={[layoutStyles.listSelectOption, isSelected && layoutStyles.listSelectOptionSelected]}
    onPress={onPress}
  >
    <Text style={textStyles.listSelectOption}>{label}</Text>
  </TouchableOpacity>
);

export { ListOption };
