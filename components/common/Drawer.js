/*
 * basic idea adapted from https://drum-machine-340.herokuapp.com/management
 */

import React from "react";
import { View, Text } from "react-native";
import { layoutStyles } from "../../assets/stylesheets/layouts";

const Drawer = ({isOpen, text}) => {
  return (
    <>
      {isOpen &&
        <View style={layoutStyles.drawer}>
          <Text>{text}</Text>
        </View>
      }
    </>
  );
};

export { Drawer };
