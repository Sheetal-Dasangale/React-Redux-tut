import React from "react";
import { CommonContext } from "./CommonContex";
class Header extends React.Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => (
          <h1 style={{ backgroundColor: color }}>Hello, This is Header page</h1>
        )}
      </CommonContext.Consumer>
    );
  }
}
export default Header;
