import React, { Component } from "react";
import Ingredient from "./Ingredient";

class UserRecipe extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="ui raised segment">
        {this.props.userRec.map(ingred => {
          return <Ingredient key={ingred.id} ingredient={ingred} />;
        })}
      </div>
    );
  }
}

export default UserRecipe;
