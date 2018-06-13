import React, { Component } from "react";
// import AdjustedRecipeIngredient from "./AdjustedRecipeIngredient";

class AdjustedRecipeContainer extends Component {
  render() {
    return <div className="ui raised segment">Adjusted Recipe:</div>;
    // {this.props.adjustedRecipe.map(ingred => {
    //   return (
    //     <AdjustedRecipeIngredient
    //       key={ingred.ingredient.id}
    //       ingredient={ingred}
    //     />
    //   );
    // })}
    //   </div>
    // );
  }
}

export default AdjustedRecipeContainer;
