/*
 * basic idea adapted from https://drum-machine-340.herokuapp.com/management
 */

import React from "react";
import { View, Text } from "react-native";

const drawerStyle = {
  position: 'fixed',
  bottom: 0,
  width: '100vw',
  height: '250px',
  backgroundColor: 'white',
  padding: '10px 30px',
  zIndex: 100,
  boxShadow: 'rgb(0 0 0 / 60%) 0px -4px 4px 2px'
};

const Drawer = ({isOpen, text}) => {
  return (
    <>
      {isOpen &&
        <View style={drawerStyle}>
          <Text>{text}</Text>
        </View>
      }
    </>
  );
};

export { Drawer };
