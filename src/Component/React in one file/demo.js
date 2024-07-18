import React from "react";
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Sagar",
    };
    this.handler = this.handler.bind(this, "Pakhee"); // or binding with this in constructor
  }

  handler = (name) =>
    this.setState({
      name: name,
    });

  // handler define with arrow function

  //   handler () {
  //     this.setState({
  //       name: "shravani",
  //     });
  //   }; // or handler difine with normal function

  render() {
    return (
      <div>
        <h1>Hello React</h1>
        {/* <button onClick={this.handler.bind(this)}>Clickme</button> */}
        <button onClick={this.handler}>Clickme</button>
        {/* binding with this in button itself */}

        <h2>{this.state.name}</h2>
        <Abc propName={this.state.name} />
      </div>
    );
  }
}

class Abc extends React.Component {
  render() {
    return (
      <div>
        <p>Parent Props rendering in child</p>
        <p>Name:{this.props.propName}</p>
      </div>
    );
  }
}

// class Demo extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       data: "www.javatpoint.com",
//     };
//     this.handleEvent = this.handleEvent.bind(this);
//   }
//   handleEvent() {
//     console.log(this.props);
//   }
//   render() {
//     return (
//       <div className="App">
//         <h2>React Constructor Example</h2>
//         <input type="text" value={this.state.data} />
//         <button onClick={this.handleEvent}>Please Click</button>
//       </div>
//     );
//   }
// }

export default Demo;
