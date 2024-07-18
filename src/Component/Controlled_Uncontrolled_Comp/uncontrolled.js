import React, { useRef, useState } from "react";
//Uncontrolled Component with class component and Functional Component
//Uncontrolled Component with class component :->
// class Uncontrolled extends React.Component {
//   constructor() {
//     super();
//     this.state = { inputValue: "" }; // this state is used in uncontrolled component to render the value of input field
//     this.input = React.createRef();
//     this.submitForm = this.submitForm.bind(this);
//     this.handleChange = this.handleChange.bind(this);
//   }
//   handleChange = () => {
//     this.setState({ inputValue: this.input.current.value });
//   };
//   submitForm = (e) => {
//     e.preventDefault();
//     console.log("Name:", this.input.current.value);
//   };
//   render() {
//     return (
//       <div>
//         <form onSubmit={this.submitForm}>
//           <input type="text" ref={this.input} onChange={this.handleChange} />
//           {/* <button type="submit" onClick={this.handleChange}> */}
//           <button type="submit">Save</button>
//           <p>Name:{this.state.inputValue}</p>
//         </form>
//       </div>
//     );
//   }
// }
// export default Uncontrolled;

export default function Uncontrolled() {
  let [val, setVal] = useState("");
  let inputref = useRef(null);

  let handleChange = () => {
    setVal(inputref.current.value);
  };
  let sumbitForm = (e) => {
    e.preventDefault();
    console.log("Name:", inputref.current.value);
  };

  return (
    <div>
      <form onSubmit={sumbitForm}>
        <input type="text" ref={inputref} onChange={handleChange} />
        <button type="Submit">Save</button>
        <p>Name: {val}</p>
      </form>
    </div>
  );
}
