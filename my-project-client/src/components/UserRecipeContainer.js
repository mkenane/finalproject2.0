import React, { Component } from "react";

import UserRecipeIngredient from "./UserRecipeIngredient";

class UserRecipeContainer extends Component {
  render() {
    return (
      <div className="ui raised segment" style={{ backgroundColor: "yellow" }}>
        Your Recipe:
        {this.props.userRec.map(ingred => {
          return (
            <UserRecipeIngredient
              key={ingred.ingredient.id}
              ingredient={ingred}
              handleIngredientClickRemoval={
                this.props.handleIngredientClickRemoval
              }
            />
          );
        })}
        <button
          className="ui button"
          style={{ width: 130, height: 30 }}
          onClick={this.props.handleRecipeSubmit}
        >
          submit
        </button>
        <button
          className="ui button"
          style={{ width: 130, height: 30 }}
          onClick={this.props.handleRecipeReset}
        >
          reset
        </button>
      </div>
    );
  }
}

export default UserRecipeContainer;
