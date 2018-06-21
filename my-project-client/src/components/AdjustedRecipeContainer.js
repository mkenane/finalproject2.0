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
      kosherclicker: false,
      dairyclicker: false,
      glutenfreeclicker: false,
      veggieclicker: false,
      lowcalorieclicker: false,
      userIngredientsReplaced: [],
      relationshipsUsed: [],
      approvedcat: [1, 2, 3, 4, 5]
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

  handleRecipeClear = event => {
    this.setState({ submittedRecipe: [] }, () =>
      console.log(this.state.submittedRecipe)
    );
    this.setState({ adjustedRecipe: [] }, () =>
      console.log(this.state.adjustedRecipe)
    );

    this.props.handleRecipeReset(event);
  };

  handleGlutenFreeClick = event => {
    let ingredientsToReplace = [];
    let pendinguserrec = [];
    let replacingrelationships = [];
    let replacingingrids = [];
    let almostcompletedUserRec = [];

    console.log(this.state.approvedcat);
    let approvedcatty = this.state.approvedcat.filter(
      num => num !== parseInt(event.target.id, 10)
    );
    this.setState({ approvedcat: approvedcatty }, () =>
      console.log(this.state.approvedcat)
    );

    let restricteding = this.state.categoryIngredients.filter(cating => {
      return !approvedcatty.includes(cating.category_id);
    });

    console.log(restricteding);

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
    this.setState({ userIngredientsReplaced: ingredientsToReplace });

    replacingrelationships = ingredientsToReplace.map(useringrid => {
      return this.state.relationships.find(subingrid => {
        return useringrid.id === subingrid.ingredient_id;
      });
    });

    replacingrelationships.forEach(repre =>
      this.state.ingredients.forEach(ingrid => {
        if (repre.replacement_ingredient_id === ingrid.id) {
          console.log(ingrid);
          console.log(repre.replacement_ingredient_id);
          replacingingrids.push(ingrid);
        }
      })
    );

    pendinguserrec.forEach(ingrid => {
      almostcompletedUserRec.push(ingrid);
    });

    let completedUserRec = replacingingrids.concat(almostcompletedUserRec);

    this.setState({ adjustedRecipe: completedUserRec });
    this.setState({ submittedRecipe: completedUserRec });

    this.setState({ glutenfreeclicker: !this.state.glutenfreeclicker });
    this.setState({ relationshipsUsed: replacingrelationships });
  };

  handleDairyFreeClick = event => {
    let ingredientsToReplace = [];
    let pendinguserrec = [];
    let replacingrelationships = [];
    let replacingingrids = [];
    let almostcompletedUserRec = [];

    console.log(this.state.approvedcat);
    let approvedcatty = this.state.approvedcat.filter(
      num => num !== parseInt(event.target.id, 10)
    );
    this.setState({ approvedcat: approvedcatty }, () =>
      console.log(this.state.approvedcat)
    );

    let restricteding = this.state.categoryIngredients.filter(cating => {
      return !approvedcatty.includes(cating.category_id);
    });

    console.log(restricteding);

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
    this.setState({ userIngredientsReplaced: ingredientsToReplace });

    replacingrelationships = ingredientsToReplace.map(useringrid => {
      return this.state.relationships.find(subingrid => {
        return useringrid.id === subingrid.ingredient_id;
      });
    });

    replacingrelationships.forEach(repre =>
      this.state.ingredients.forEach(ingrid => {
        if (repre.replacement_ingredient_id === ingrid.id) {
          console.log(ingrid);
          console.log(repre.replacement_ingredient_id);
          replacingingrids.push(ingrid);
        }
      })
    );

    pendinguserrec.forEach(ingrid => {
      almostcompletedUserRec.push(ingrid);
    });

    let completedUserRec = replacingingrids.concat(almostcompletedUserRec);

    this.setState({ adjustedRecipe: completedUserRec });
    this.setState({ submittedRecipe: completedUserRec });

    this.setState({ dairyclicker: !this.state.glutenfreeclicker });
    this.setState({ relationshipsUsed: replacingrelationships });
  };

  handleKosherClick = event => {
    let ingredientsToReplace = [];
    let pendinguserrec = [];
    let replacingrelationships = [];
    let replacingingrids = [];
    let almostcompletedUserRec = [];

    console.log(this.state.approvedcat);
    let approvedcatty = this.state.approvedcat.filter(
      num => num !== parseInt(event.target.id, 10)
    );
    this.setState({ approvedcat: approvedcatty }, () =>
      console.log(this.state.approvedcat)
    );

    let restricteding = this.state.categoryIngredients.filter(cating => {
      return !approvedcatty.includes(cating.category_id);
    });

    console.log(restricteding);

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
    this.setState({ userIngredientsReplaced: ingredientsToReplace });

    replacingrelationships = ingredientsToReplace.map(useringrid => {
      return this.state.relationships.find(subingrid => {
        return useringrid.id === subingrid.ingredient_id;
      });
    });

    replacingrelationships.forEach(repre =>
      this.state.ingredients.forEach(ingrid => {
        if (repre.replacement_ingredient_id === ingrid.id) {
          console.log(ingrid);
          console.log(repre.replacement_ingredient_id);
          replacingingrids.push(ingrid);
        }
      })
    );

    pendinguserrec.forEach(ingrid => {
      almostcompletedUserRec.push(ingrid);
    });

    let completedUserRec = replacingingrids.concat(almostcompletedUserRec);

    this.setState({ adjustedRecipe: completedUserRec });
    this.setState({ submittedRecipe: completedUserRec });

    this.setState({ kosherclicker: !this.state.kosherclicker });
    this.setState({ relationshipsUsed: replacingrelationships });
  };

  handleVeggieClick = event => {
    let ingredientsToReplace = [];
    let pendinguserrec = [];
    let replacingrelationships = [];
    let replacingingrids = [];
    let almostcompletedUserRec = [];

    console.log(this.state.approvedcat);
    let approvedcatty = this.state.approvedcat.filter(
      num => num !== parseInt(event.target.id, 10)
    );
    this.setState({ approvedcat: approvedcatty }, () =>
      console.log(this.state.approvedcat)
    );

    let restricteding = this.state.categoryIngredients.filter(cating => {
      return !approvedcatty.includes(cating.category_id);
    });

    console.log(restricteding);

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
    this.setState({ userIngredientsReplaced: ingredientsToReplace });

    replacingrelationships = ingredientsToReplace.map(useringrid => {
      return this.state.relationships.find(subingrid => {
        return useringrid.id === subingrid.ingredient_id;
      });
    });

    replacingrelationships.forEach(repre =>
      this.state.ingredients.forEach(ingrid => {
        if (repre.replacement_ingredient_id === ingrid.id) {
          console.log(ingrid);
          console.log(repre.replacement_ingredient_id);
          replacingingrids.push(ingrid);
        }
      })
    );

    pendinguserrec.forEach(ingrid => {
      almostcompletedUserRec.push(ingrid);
    });

    let completedUserRec = replacingingrids.concat(almostcompletedUserRec);

    this.setState({ adjustedRecipe: completedUserRec });
    this.setState({ submittedRecipe: completedUserRec });

    this.setState({ veggieclicker: !this.state.veggieclicker });
    this.setState({ relationshipsUsed: replacingrelationships });
  };

  handleLowCalorieClick = event => {
    let ingredientsToReplace = [];
    let pendinguserrec = [];
    let replacingrelationships = [];
    let replacingingrids = [];
    let almostcompletedUserRec = [];

    console.log(this.state.approvedcat);
    let approvedcatty = this.state.approvedcat.filter(
      num => num !== parseInt(event.target.id, 10)
    );
    this.setState({ approvedcat: approvedcatty }, () =>
      console.log(this.state.approvedcat)
    );

    let restricteding = this.state.categoryIngredients.filter(cating => {
      return !approvedcatty.includes(cating.category_id);
    });

    console.log(restricteding);

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
    this.setState({ userIngredientsReplaced: ingredientsToReplace });

    replacingrelationships = ingredientsToReplace.map(useringrid => {
      return this.state.relationships.find(subingrid => {
        return useringrid.id === subingrid.ingredient_id;
      });
    });

    replacingrelationships.forEach(repre =>
      this.state.ingredients.forEach(ingrid => {
        if (repre.replacement_ingredient_id === ingrid.id) {
          console.log(ingrid);
          console.log(repre.replacement_ingredient_id);
          replacingingrids.push(ingrid);
        }
      })
    );

    pendinguserrec.forEach(ingrid => {
      almostcompletedUserRec.push(ingrid);
    });

    let completedUserRec = replacingingrids.concat(almostcompletedUserRec);

    this.setState({ adjustedRecipe: completedUserRec });
    this.setState({ submittedRecipe: completedUserRec });

    this.setState({ lowcalorieclicker: !this.state.lowcalorieclicker });
    this.setState({ relationshipsUsed: replacingrelationships });
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
          handleKosherClick={this.handleKosherClick}
          handleVeggieClick={this.handleVeggieClick}
          handleLowCalorieClick={this.handleLowCalorieClick}
          kosherclicker={this.state.kosherclicker}
          glutenfreeclicker={this.state.glutenfreeclicker}
          dairyclicker={this.state.dairyclicker}
          veggieclicker={this.state.veggieclicker}
          lowcalorieclicker={this.state.lowcalorieclicker}
        />
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
