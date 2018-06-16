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
      ingredients: [],
      relationships: []
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
    let ingredientsToReplace = [];
    let pendinguserrec = [];
    let replacingrelationships = [];
    let replacingingrids = [];
    let almostcompletedUserRec = [];

    let isolatingUserIngrids = this.state.userRecipe.map(ingrid => {
      return ingrid.ingredient;
    });
    console.log(isolatingUserIngrids);
    console.log(this.state.userRecipe);

    isolatingUserIngrids.forEach(useringrid =>
      this.state.categoryIngredients.forEach(catingrid => {
        if (
          useringrid.id === catingrid.ingredient_id &&
          catingrid.category_id === parseInt(event.target.id, 10)
        ) {
          ingredientsToReplace.push(useringrid);
          console.log(useringrid);
          pendinguserrec = isolatingUserIngrids.filter(ui => ui !== useringrid);
        }
      })
    );
    console.log(pendinguserrec);
    console.log(ingredientsToReplace);
    console.log(this.state.relationships);

    replacingrelationships = ingredientsToReplace.map(useringrid => {
      return this.state.relationships.find(subingrid => {
        return useringrid.id === subingrid.ingredient_id;
      });
    });

    replacingrelationships.forEach(repre =>
      this.state.ingredients.forEach(ingrid => {
        if (repre.replacement_ingredient_id === ingrid.id) {
          replacingingrids.push(ingrid);
        }
      })
    );

    pendinguserrec.forEach(ingrid => {
      almostcompletedUserRec.push(ingrid);
    });

    let completedUserRec = replacingingrids.concat(almostcompletedUserRec);

    console.log(completedUserRec);
    this.setState({ adjustedRecipe: completedUserRec }, () =>
      console.log(this.state.adjustedRecipe)
    );
  };

  render() {
    const userRec =
      this.state.userRecipe.length > 0 ? this.state.userRecipe : [];

    const adjustedRec =
      this.state.adjustedRecipe.length > 0 ? this.state.adjustedRecipe : [];

    return (
      <div className="ui grid">
        <div className="nine wide column">
          <UserRecipeContainer
            userRec={userRec}
            handleIngredientClickRemoval={this.handleIngredientClickRemoval}
          />
          <Adjustments handleGlutenFreeClick={this.handleGlutenFreeClick} />
          <AdjustedRecipeContainer adjustedRec={adjustedRec} />
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
