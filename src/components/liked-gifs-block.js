import React, {Component} from "react";

class LikedBlock extends Component {
  render() {
    return (
      <div style={divStyle}>
        <p>YOUR LIKED GIFS</p>
      </div>
    );
  }
}

const divStyle = {
  //   backgroundColor: "#D3D3D3",
  //   height: 60
};

export default LikedBlock;
