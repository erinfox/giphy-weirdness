import React from "react";
import Header from "./components/header";
import SearchBar from "./components/search-bar";
import Paragraph from "./components/paragraph";
import ResultsBlock from "./components/results-block";
import LikedBlock from "./components/liked-gifs-block";

function App() {
  return (
    <div className="App">
      <Header />
      <Paragraph />
      <SearchBar />
      <ResultsBlock />
      <LikedBlock />
    </div>
  );
}

export default App;
