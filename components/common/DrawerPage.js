import React, { useEffect, useState } from "react";

const DrawerPage = ({}) => {
  const [isMinimized, setIsMinimized] = useState(true);

  const toggleDrawerExpand = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <>
      <DrawerExpandButton isInitiallyUp={true} onPress={toggleDrawerExpand}></DrawerExpandButton>
    </>
  );
};

export { DrawerPage };
