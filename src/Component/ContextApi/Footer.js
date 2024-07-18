import React from "react";
import { CommonContext } from "./CommonContex";
class Footer extends React.Component {
  render() {
    return (
      <CommonContext.Consumer>
        {({ color }) => (
          <h1 className="footer" style={{ backgroundColor: color }}>
            Hello, This is Footer{" "}
          </h1>
        )}
      </CommonContext.Consumer>
    );
  }
}
export default Footer;
