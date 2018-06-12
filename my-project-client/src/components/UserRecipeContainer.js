import React, { Component } from "react";
import Ingredient from "./Ingredient";
import UserRecipeIngredient from "./UserRecipeIngredient";

class UserRecipeContainer extends Component {
  render() {
    // console.log(this.props);
    return (
      <div className="ui raised segment">
        Your Recipe:
        {this.props.userRec.map(ingred => {
          return <UserRecipeIngredient key={ingred.id} ingredient={ingred} />;
        })}
      </div>
    );
  }
}

export default UserRecipeContainer;
