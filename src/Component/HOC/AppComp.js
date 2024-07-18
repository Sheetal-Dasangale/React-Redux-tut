import React from "react";

import HOCComp from "./HOCComp";
function AppComp() {
  return <>This is Higher Order Component Argument</>;
}

AppComp = HOCComp(AppComp);
export default AppComp;
