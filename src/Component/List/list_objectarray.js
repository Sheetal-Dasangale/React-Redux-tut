import React from "react";
// class ListItemObject extends React.Component {
//   constructor(props) {
//     super(props);
//   }

//   render() {
//     const Title = this.props.data.map((obj) => <p key={obj.id}>{obj.title}</p>);
//     const Content = this.props.data.map((obj) => (
//       <p key={obj.id}>
//         {obj.title}:{obj.content}
//       </p>
//     ));

//     return (
//       <div>
//         {Title}
//         <hr />
//         {Content}
//       </div>
//     );
//   }
// }

function ListItemObject(props) {
  const Title = props.data.map((obj) => <p key={obj.id}>{obj.title}</p>);
  const Content = props.data.map((obj) => (
    <p key={obj.id}>
      {obj.title}:{obj.content}
    </p>
  ));

  return (
    <div>
      {Title}
      <hr />
      {Content}
    </div>
  );
}

export default ListItemObject;
