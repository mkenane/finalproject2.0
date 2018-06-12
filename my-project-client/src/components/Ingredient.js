import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class Ingredient extends Component {
  // const ingrid = {this.props}
  render() {
    return (
      <Card>
        <Card.Content>{this.props.ingredient.name}</Card.Content>
        <button
          className="ui button"
          onClick={event => this.props.handleIngredientClick(this.props)}
          style={{ width: 150, height: 30 }}
        >
          {" "}
          add to recipe{" "}
        </button>
      </Card>
    );
  }
}

export default Ingredient;
