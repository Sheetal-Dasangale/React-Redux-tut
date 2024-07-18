import React from "react";
class Bindmethod extends React.Component {
  constructor() {
    super();

    this.state = { name: "sheetal" };
  }

  handler = (name) =>
    this.setState({
      name: name,
    });

  render() {
    return (
      <>
        <h1>Binding Method</h1>
        <h1>Name:{this.state.name}</h1>
        <p>Click here to change name</p>
        <button onClick={this.handler.bind(this, "Shraddha")}>change</button>
      </>
    );
  }
}

export default Bindmethod;
