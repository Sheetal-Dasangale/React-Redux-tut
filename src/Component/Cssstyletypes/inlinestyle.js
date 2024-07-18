import React from "react";
// import "./App.css";
class InlineStyle extends React.Component {
  render() {
    const mystyle = {
      color: "Green",
      backgroundColor: "lightBlue",
      padding: "10px",
      fontFamily: "Arial",
    };
    return (
      <div>
        <h1 style={{ color: "Green" }}>
          Hello, this is Inline Css style in React js
        </h1>
        <p style={{ backgroundColor: "lightgreen" }}>
          This style with camelCase style attribute
        </p>

        <p style={mystyle}>This css style with javascript object</p>

        <div className="externalcssstyle">
          <h1>Hello JavaTpoint</h1>
          <p>Here, you can find all CS tutorials.</p>
        </div>
      </div>
    );
  }
}
export default InlineStyle;
