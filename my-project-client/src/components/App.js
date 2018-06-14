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
      adjustedRecipe: [],
      categoryIngredients: [],
      ingredients: []
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

  handleGlutenFreeClick = event => {
    console.log(event.target.id);
    console.log(this.state.categoryIngredients);
    let usercategoryingredients = this.state.userRecipe.filter(useringrid => {
      return this.state.categoryIngredients.filter(catingrid => {
        useringrid.ingredient.id === catingrid.ingredient_id;
      });
    });
    console.log(usercategoryingredients);
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
          <Adjustments handleGlutenFreeClick={this.handleGlutenFreeClick} />
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
