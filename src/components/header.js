import React, {Component} from "react";

class Header extends Component {
  render() {
    return (
      <div style={divStyle}>
        <p>Weirdness Calculator</p>
      </div>
    );
  }
}

const divStyle = {
  backgroundColor: "#D3D3D3",
  height: 60
};

export default Header;
