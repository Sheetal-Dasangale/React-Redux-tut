import React from "react";
import { CommonContext } from "./CommonContex";
function UpdateButton() {
  return (
    <CommonContext.Consumer>
      {({ updateColor }) => (
        <div>
          <button onClick={() => updateColor("yellow")}>
            Update color yellow
          </button>
          <button onClick={() => updateColor("blue")}>Update color blue</button>
          <button onClick={() => updateColor("red")}>Update color red</button>
        </div>
      )}
    </CommonContext.Consumer>
  );
}
export default UpdateButton;
