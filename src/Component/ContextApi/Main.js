import React from "react";
import { CommonContext } from "./CommonContex";
class Main extends React.Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => (
          <h1 style={{ backgroundColor: color }}>Hello, This is main page</h1>
        )}
      </CommonContext.Consumer>
    );
  }
}
export default Main;
