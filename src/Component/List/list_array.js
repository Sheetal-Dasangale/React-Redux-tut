import React from "react";
// class ListItem extends React.Component {
//   constructor() {
//     super();
//     this.state = { data: ["sheetal", "shravani", "shraddha"] };
//   }

//   render() {
//     return (
//       <div>
//         <h1>List the data array Item in Class Component</h1>
//         {/* <ul> */}
//         {this.state.data.map((item, index) => (
//           <p>Name is:{item}</p>
//           // <li key={index}>Name is:{item}</li>
//         ))}
//         {/* </ul> */}
//       </div>
//     );
//   }
// }

function ListItem() {
  const Student = ["sheetal", "shravani", "shradha"];
  return (
    <div>
      <h1>List the data array Item in functional Component</h1>
      {Student.map((item, index) => (
        <p key={index}>Name is:{item}</p>
      ))}
    </div>
  );
}

export default ListItem;
