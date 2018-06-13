import React, { Component } from "react";
import IngredientsContainer from "./IngredientsContainer";
import UserRecipeContainer from "./UserRecipeContainer";
import AdjustedRecipeContainer from "./AdjustedRecipeContainer";
import Adjustments from "./Adjustments";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userRecipe: [],
      adjustedRecipe: []
    };
  }

  handleIngredientClickAddition = ingrid => {
    console.log(ingrid.ingredient);
    let foundIngrid = this.state.userRecipe.find(ingr => {
      return ingr.ingredient.id === ingrid.ingredient.id;
    });

    if (!this.state.userRecipe.includes(foundIngrid)) {
      this.setState({ userRecipe: [...this.state.userRecipe, ingrid] });
    }
  };

  handleIngredientClickRemoval = ingrid => {
    let newUserRecipe = this.state.userRecipe.filter(
      ingr => ingr.ingredient !== ingrid.ingredient.ingredient
    );
    this.setState({ userRecipe: newUserRecipe }, () => console.log(this.state));
  };

  render() {
    const userRec =
      this.state.userRecipe.length > 0 ? this.state.userRecipe : [];
    return (
      <div className="ui grid">
        <div className="nine wide column">
          <UserRecipeContainer
            userRec={userRec}
            handleIngredientClickRemoval={this.handleIngredientClickRemoval}
          />
          <Adjustments />
          <AdjustedRecipeContainer userRec={this.state.adjustedRecipe} />
        </div>

        <div className="seven wide column">
          <IngredientsContainer
            handleIngredientClickAddition={this.handleIngredientClickAddition}
          />
        </div>
      </div>
    );
  }
}

export default App;
