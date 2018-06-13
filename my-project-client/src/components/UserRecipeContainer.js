import React, { Component } from "react";

import UserRecipeIngredient from "./UserRecipeIngredient";

class UserRecipeContainer extends Component {
  render() {
    return (
      <div className="ui raised segment">
        Your Recipe:
        {this.props.userRec.map(ingred => {
          return (
            <UserRecipeIngredient
              key={ingred.ingredient.id}
              ingredient={ingred}
            />
          );
        })}
      </div>
    );
  }
}

export default UserRecipeContainer;
