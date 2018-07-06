import React, { Component } from "react";
import AdjustedRecipeIngredient from "./AdjustedRecipeIngredient";
import Adjustments from "./Adjustments";

class AdjustedRecipeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ingredients: [],
      submittedRecipe: [],
      adjustedRecipe: [],
      glutenfreeclicker: false,
      approvedcat: [1, 2, 3, 4, 5]
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/ingredients")
      .then(resp => resp.json())
      .then(jsonresp => this.setState({ ingredients: jsonresp }));
  }

  handleRecipeClear = event => {
    this.setState({ submittedRecipe: [] });
    this.setState({ adjustedRecipe: [] });
    this.props.handleRecipeReset(event);
  };

  findGoodReplacement = ing => {};

  handleGlutenFreeClick = event => {
    let ingredientsNotReplaced = [];
    let ingredientsToReplace = [];

    let categoriesFiltered = this.state.approvedcat.filter(
      num => num !== parseInt(event.target.id)
    );
    this.setState({ approvedcat: categoriesFiltered });
    console.log(categoriesFiltered);

    this.props.submittedRec.forEach(ingred => {
      if (ingred.ingredientcategories.length > 0) {
        // console.log(ingred);
        ingred.ingredientcategories.forEach(ingredcat => {
          // console.log(ingredcat);
          if (!categoriesFiltered.includes(ingredcat.category_id)) {
            ingredientsToReplace.push(ingred);
          }
        });
      } else {
        ingredientsNotReplaced.push(ingred);
      }
    });

    console.log(ingredientsNotReplaced);
    console.log(ingredientsToReplace);

    //write function to replace an ingredient
    //combine ingredientsNotReplaced and all the replacements
  };

  render() {
    const adjustedRec =
      this.state.adjustedRecipe.length > 0
        ? this.state.adjustedRecipe
        : this.props.submittedRec;

    return (
      <div className="ui raised segment" style={{ backgroundColor: "red" }}>
        <Adjustments handleGlutenFreeClick={this.handleGlutenFreeClick} />
        Adjusted Recipe:
        {adjustedRec.map(ingred => {
          return (
            <AdjustedRecipeIngredient key={ingred.id} ingredient={ingred} />
          );
        })}
        <button
          className="ui button"
          style={{ width: 130, height: 30 }}
          onClick={this.handleRecipeClear}
        >
          reset
        </button>
      </div>
    );
  }
}

export default AdjustedRecipeContainer;
