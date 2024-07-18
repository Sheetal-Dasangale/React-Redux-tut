import React from "react";

class Showbutton extends React.Component {
  constructor() {
    super();
    this.state = {
      bio: false,
    };
    this.toggleBio = this.toggleBio.bind(this);
  }

  toggleBio() {
    this.setState({
      bio: !this.state.bio,
    });
  }

  render() {
    return (
      <div>
        <h3>This is about Toggle button and setState method</h3>
        {this.state.bio ? (
          <p>
            ReactJS is a declarative, efficient, and flexible JavaScript library
            for building reusable UI components. It is an open-source,
            component-based front end library which is responsible only for the
            view layer of the application. It was initially developed and
            maintained by Facebook and later used in its products like WhatsApp
            & Instagram.
            <button onClick={this.toggleBio}>ShowLess</button>
          </p>
        ) : (
          <button onClick={this.toggleBio}>ReadMore</button>
        )}
        <br />
      </div>
    );
  }
}

export default Showbutton;
