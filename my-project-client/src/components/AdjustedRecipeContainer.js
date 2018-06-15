import React, { Component } from "react";
import AdjustedRecipeIngredient from "./AdjustedRecipeIngredient";

class AdjustedRecipeContainer extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="ui raised segment">
        Adjusted Recipe:
        {this.props.adjustedRec.map(ingred => {
          return (
            <AdjustedRecipeIngredient key={ingred.id} ingredient={ingred} />
          );
        })}
      </div>
    );
  }
}

export default AdjustedRecipeContainer;
