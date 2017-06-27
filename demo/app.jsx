/*global document:false*/
import React from "react";
import ReactDOM from "react-dom";
import {DadJoke} from "../src/index";

class App extends React.Component {
  render() {
    return (
      <div className="demo">
        <div className="random-joke">
          <h2 className="demo__heading">Random Dad Joke <small>(as text)</small></h2>
          <DadJoke />
        </div>
        
        <div className="random-as-image">
          <h2 className="demo__heading">Random Dad Joke <small>(as image)</small></h2>
          <DadJoke img />
        </div>

        <div className="random-with-refresh">
          <h2 className="demo__heading">Random Dad Joke <small>(with refresh button)</small></h2>
          <DadJoke refreshButton />
        </div>
      </div>
    );
  }
}

const content = document.getElementById("content");

ReactDOM.render(<App/>, content);
