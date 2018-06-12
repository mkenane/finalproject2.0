import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class UserRecipeIngredient extends Component {
  render() {
    console.log(this.props.ingredient);
    return (
      <div className="ui raised segment">
        <Card>
          <Card.Content>{this.props.ingredient.ingredient.name}</Card.Content>
          <button className="ui button" style={{ width: 150, height: 30 }}>
            {" "}
            delete{" "}
          </button>
        </Card>
      </div>
    );
  }
}

export default UserRecipeIngredient;
