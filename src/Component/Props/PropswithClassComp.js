import React from "react";
class PropswithClassComp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { namee: "sheetal" };
  }

  render() {
    return (
      <div>
        <h3>Here is the Parent props with class Component</h3>
        NameParent:{this.state.namee}
        <PropschildCompwithclass nameprop={this.state.namee} />
      </div>
    );
  }
}

class PropschildCompwithclass extends React.Component {
  render() {
    return (
      <div>
        <h3>Here is the Child props Component with class</h3>
        NameChild:{this.props.nameprop}
      </div>
    );
  }
}
export default PropswithClassComp;
