import React, {Component} from "react";

class SearchBar extends Component {
  state = {
    searchTerm: "",
    imageUrl: undefined
  };

  fetchGif = () => {
    const API = `https://api.giphy.com/v1/gifs/search?api_key=1T1wLUqZOliGDhbU8OfBXQ3AkVYgYxNV&q={searchTerm}&limit=1&offset=0&rating=PG&lang=en`;

    fetch(API)
      .then(response => response.json())
      .then(result => {
        console.log({state: this.state});
        this.setState(state => ({...state, imageUrl: result.data.image_url}));
      })
      .catch(error => console.log(error));
  };

  componentDidMount() {
    this.fetchGif();
  }

  handleSearchBarChange(searchTerm) {
    this.setState({searchTerm});
    this.props.onChange(searchTerm);
  }
  render() {
    const {imageUrl, searchTerm} = this.state;
    return (
      <div style={container}>
        <div className="search">
          <p>Search term</p>
          <input
            type="text"
            placeholder="Search all the GIFs..."
            value={searchTerm}
            onChange={event => this.handleSearchBarChange(event.target.value)}
          />
          <button>SEARCH</button>
        </div>
        {imageUrl && <img src={imageUrl} alt="random gif" style={gif} />}
      </div>
    );
  }
}

const container = {
  height: 30,
  width: 200,
  paddingBottom: 100
};

const gif = {
  height: 50,
  width: 50
};

export default SearchBar;
