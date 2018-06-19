import React, { Component } from "react";
import AdjustedRecipeIngredient from "./AdjustedRecipeIngredient";
import Adjustments from "./Adjustments";

class AdjustedRecipeContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userRecipe: [],
      adjustedRecipe: [],
      categoryIngredients: [],
      ingredients: [],
      relationships: [],
      submittedRecipe: [],
      clicker: false
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

  handleGlutenFreeClick = event => {
    let ingredientsToReplace = [];
    let pendinguserrec = [];
    let replacingrelationships = [];
    let replacingingrids = [];
    let almostcompletedUserRec = [];

    let isolatingUserIngrids =
      this.state.adjustedRecipe.length > 0
        ? this.state.adjustedRecipe
        : this.props.submittedRec;

    isolatingUserIngrids.forEach(useringrid =>
      this.state.categoryIngredients.forEach(catingrid => {
        if (
          useringrid.id === catingrid.ingredient_id &&
          catingrid.category_id === parseInt(event.target.id, 10)
        ) {
          ingredientsToReplace.push(useringrid);
          pendinguserrec = isolatingUserIngrids.filter(ui => ui !== useringrid);
        }
      })
    );

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

    this.setState({ adjustedRecipe: completedUserRec });
    this.setState({ submittedRecipe: completedUserRec }, () =>
      console.log(this.state.submittedRecipe)
    );
    console.log(this.state.adjustedRecipe);
  };

  handleDairyFreeClick = event => {
    let ingredientsToReplace = [];
    let pendinguserrec = [];
    let replacingrelationships = [];
    let replacingingrids = [];
    let almostcompletedUserRec = [];

    let isolatingUserIngrids =
      this.state.adjustedRecipe.length > 0
        ? this.state.adjustedRecipe
        : this.props.submittedRec;
    console.log(isolatingUserIngrids);

    isolatingUserIngrids.forEach(useringrid =>
      this.state.categoryIngredients.forEach(catingrid => {
        if (
          useringrid.id === catingrid.ingredient_id &&
          catingrid.category_id === parseInt(event.target.id, 10)
        ) {
          ingredientsToReplace.push(useringrid);
          pendinguserrec = isolatingUserIngrids.filter(ui => ui !== useringrid);
        }
      })
    );

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

    this.setState({ adjustedRecipe: completedUserRec });
    this.setState({ submittedRecipe: completedUserRec }, () =>
      console.log(this.state.submittedRecipe)
    );
    console.log(this.state.adjustedRecipe);
  };

  handleKosherFreeClick = event => {
    let ingredientsToReplace = [];
    let pendinguserrec = [];
    let replacingrelationships = [];
    let replacingingrids = [];
    let almostcompletedUserRec = [];

    let isolatingUserIngrids =
      this.state.adjustedRecipe.length > 0
        ? this.state.adjustedRecipe
        : this.props.submittedRec;
    console.log(isolatingUserIngrids);

    isolatingUserIngrids.forEach(useringrid =>
      this.state.categoryIngredients.forEach(catingrid => {
        if (
          useringrid.id === catingrid.ingredient_id &&
          catingrid.category_id === parseInt(event.target.id, 10)
        ) {
          ingredientsToReplace.push(useringrid);
          pendinguserrec = isolatingUserIngrids.filter(ui => ui !== useringrid);
        }
      })
    );

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

    this.setState({ adjustedRecipe: completedUserRec });
    this.setState({ submittedRecipe: completedUserRec }, () =>
      console.log(this.state.submittedRecipe)
    );
    console.log(this.state.adjustedRecipe);
  };

  render() {
    const adjustedRec =
      this.state.adjustedRecipe.length > 0
        ? this.state.adjustedRecipe
        : this.props.submittedRec;

    return (
      <div className="ui raised segment">
        <Adjustments
          handleGlutenFreeClick={this.handleGlutenFreeClick}
          handleDairyFreeClick={this.handleDairyFreeClick}
        />
        Adjusted Recipe:
        {adjustedRec.map(ingred => {
          return (
            <AdjustedRecipeIngredient key={ingred.id} ingredient={ingred} />
          );
        })}
      </div>
    );
  }
}

export default AdjustedRecipeContainer;
