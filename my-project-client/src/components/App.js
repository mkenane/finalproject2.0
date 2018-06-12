import React, { Component } from "react";
import IngredientsContainer from "./IngredientsContainer";
import UserRecipe from "./UserRecipe";

class App extends Component {
  constructor() {
    super();

    this.state = {
      UserRecipe: []
    };
  }
  render() {
    return (
      <div className="ui grid">
        <div className="nine wide column">
          <UserRecipe />
        </div>

        <div className="seven wide column">
          <IngredientsContainer />
        </div>
      </div>
    );
  }
}

export default App;
