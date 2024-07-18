import React from "react";
import { CommonContext } from "./CommonContex";
import Main from "./Main";
import UpdateButton from "./UpdateButton";
import Header from "./Header";
import Footer from "./Footer";
class AppContext extends React.Component {
  constructor() {
    super();
    this.updateColor = (color) => {
      this.setState({
        color: color,
      });
    };
    this.state = {
      color: "green",
      updateColor: this.updateColor,
    };
  }

  render() {
    return (
      <CommonContext.Provider value={this.state}>
        <Header />
        <h1>Complete and easy example for context API</h1>
        <Main />
        <UpdateButton />
        <Footer />
      </CommonContext.Provider>
    );
  }
}
export default AppContext;
