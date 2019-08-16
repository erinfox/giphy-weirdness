import React, {Component} from "react";

class Paragraph extends Component {
  render() {
    return (
      <div>
        <p>
          Find out how weird you are by selecting the GIFs that make you laugh.
          We'll show you the least weird ones to start, but you can move the
          slider to make them weirder.
        </p>

        <p>
          When you find a gif you like, press the <em>Like</em> button. Once you
          like 5 Gifs, we'll show you how weird you are.
        </p>
      </div>
    );
  }
}

export default Paragraph;
