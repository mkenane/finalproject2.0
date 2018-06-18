import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class AdjustedRecipeIngredient extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <Card>
          <Card.Content>{this.props.ingredient.name}</Card.Content>
        </Card>
      </div>
    );
  }
}

export default AdjustedRecipeIngredient;
