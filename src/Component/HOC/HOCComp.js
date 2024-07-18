import React from "react";

function HOCComp(HOC) {
  return class extends React.Component {
    render() {
      return (
        <>
          <HOC></HOC>
        </>
      );
    }
  };
}
export default HOCComp;
