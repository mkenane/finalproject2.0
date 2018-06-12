import React, { Component } from "react";
import IngredientsContainer from "./IngredientsContainer";
import UserRecipe from "./UserRecipe";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userRecipe: []
    };
  }

  handleIngredientClick = ingrid => {
    this.setState({ userRecipe: [...this.state.userRecipe, ingrid] }, () =>
      console.log(this.state)
    );
  };

  render() {
    const userRec =
      this.state.userRecipe.length > 0 ? this.state.userRecipe : [];
    return (
      <div className="ui grid">
        <div className="nine wide column">
          <UserRecipe userRec={userRec} />
        </div>

        <div className="seven wide column">
          <IngredientsContainer
            handleIngredientClick={this.handleIngredientClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
