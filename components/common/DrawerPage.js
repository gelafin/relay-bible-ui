import React from "react";
import { DrawerAppBar } from "./DrawerAppBar";

// page you can put in a drawer; full-page counterpart to DrawerOptionsFragment
const DrawerPage = ({contextHeaderText, onClosePress, onExpandPress, children}) => {

  return (
    <>
      <DrawerAppBar
        contextHeaderText={contextHeaderText}
        onClosePress={onClosePress}
        onExpandPress={onExpandPress}
      ></DrawerAppBar>
      {children}
    </>
  );
};

export { DrawerPage };
