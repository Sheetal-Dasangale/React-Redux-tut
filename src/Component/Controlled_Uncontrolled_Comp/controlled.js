import React, { useState } from "react";
//Controlled Component with class component and Functional Component
//Controlled Component with class component :->
class Controlled extends React.Component {
  constructor() {
    super();
    this.state = {
      val: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.submitform = this.submitform.bind(this);
  }

  handleChange = (e) => {
    this.setState({ val: e.target.value });
  };

  submitform = (e) => {
    console.warn("Name:", this.state.val);
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.submitform}>
          <input
            type="text"
            value={this.state.val}
            onChange={this.handleChange}
          />
          <button type="submit">Save</button>
          <p>Name:{this.state.val}</p>
        </form>
      </div>
    );
  }
}

export default Controlled;

// Controlled Component with functional Component :->

// export default function Controlled() {
//   let [val, setVal] = useState("abc");

//   let handleChange = (e) => {
//     setVal({ val: e.target.value });
//   };

//   let submitForm = (e) => {
//     e.preventDefault();
//     console.log("Name:", val);
//   };

//   return (
//     <div>
//       <form onSubmit={submitForm()}>
//         <input type="text" value={val} onChange={handleChange()} />
//         <button type="submit">Save</button>
//         <p>Name:{val}</p>
//       </form>
//     </div>
//   );
// }
