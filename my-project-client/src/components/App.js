import React, { Component } from "react";
import IngredientsContainer from "./IngredientsContainer";
import UserRecipeContainer from "./UserRecipeContainer";
import AdjustedRecipeContainer from "./AdjustedRecipeContainer";

class App extends Component {
  constructor() {
    super();

    this.state = {
      userRecipe: [],
      adjustedRecipe: [],
      submittedRecipe: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/ingredients")
      .then(resp => resp.json())
      .then(jsonresp => this.setState({ ingredients: jsonresp }));

    fetch("http://localhost:3000/relationships")
      .then(resp => resp.json())
      .then(jsonresp => this.setState({ relationships: jsonresp }));

    fetch("http://localhost:3000/categoryingredients")
      .then(resp => resp.json())
      .then(jsonresp => this.setState({ categoryIngredients: jsonresp }));
  }

  handleRecipeReset = event => {
    this.setState({ userRecipe: [] });
    this.setState({ submittedRecipe: [] });
  };

  handleRecipeSubmit = event => {
    let isolatingUserIngrids = this.state.userRecipe.map(ingrid => {
      return ingrid.ingredient;
    });
    this.setState({ submittedRecipe: isolatingUserIngrids });
  };
  handleIngredientClickAddition = ingrid => {
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
    this.setState({ userRecipe: newUserRecipe });
  };

  render() {
    const userRec =
      this.state.userRecipe.length > 0 ? this.state.userRecipe : [];

    const submittedRec =
      this.state.submittedRecipe.length > 0 ? this.state.submittedRecipe : [];

    return (
      <div className="ui grid">
        <div className="nine wide column">
          <UserRecipeContainer
            userRec={userRec}
            handleIngredientClickRemoval={this.handleIngredientClickRemoval}
            handleRecipeSubmit={this.handleRecipeSubmit}
            handleRecipeReset={this.handleRecipeReset}
          />

          <AdjustedRecipeContainer
            submittedRec={submittedRec}
            handleRecipeReset={this.handleRecipeReset}
          />
        </div>
        <div className="seven wide column">
          <IngredientsContainer
            handleIngredientClickAddition={this.handleIngredientClickAddition}
          />
        </div>
        TASTE NOT GUARANTEED
      </div>
    );
  }
}

export default App;
