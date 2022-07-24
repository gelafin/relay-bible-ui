/*
 * basic idea adapted from https://drum-machine-340.herokuapp.com/management
 */

import React from "react";
import { View } from "react-native";
import { layoutStyles } from "../../assets/stylesheets/layouts";

const Drawer = ({isOpen, children, minimize}) => {
  return (
    <>
      {isOpen &&
        <View style={[layoutStyles.drawer, !minimize && layoutStyles.fullScreenHeight]}>
          {children}
        </View>
      }
    </>
  );
};

export { Drawer };
