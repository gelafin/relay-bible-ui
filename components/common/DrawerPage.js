import React from "react";

// custom components
import { DrawerAppBar } from "./DrawerAppBar";

// page you can put in a drawer; full-page counterpart to DrawerOptionsFragment
const DrawerPage = ({headerText, onClosePress, onExpandPress, children}) => {
  return (
    <>
      <DrawerAppBar
        contextHeaderText={headerText}
        onClosePress={onClosePress}
        onExpandPress={onExpandPress}
      ></DrawerAppBar>
      {children}
    </>
  );
};

export { DrawerPage };
