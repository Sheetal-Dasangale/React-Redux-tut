import React from "react";
import { useParams, Link } from "react-router-dom";
// class User extends React.Component {
//   render() {
//     const { name } = this.props.match.params;
//     return (
//       <>
//         <h1>This is {name}'s Page</h1>
//       </>
//     );
//   }
// }
//export default withRouter(User);

function User() {
  const params = useParams();
  const { name } = params;

  return (
    <>
      <h1>This is {name}'s Page </h1>
      <Link to="/about">About</Link>
    </>
  );
}
export default User;
