import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class Ingredient extends Component {
  render() {
    // console.log(this.props);
    return (
      <Card>
        <Card.Content>{this.props.ingredient.name}</Card.Content>
        <button className="ui button" style={{ width: 150, height: 30 }}>
          {" "}
          add to recipe{" "}
        </button>
      </Card>
    );
  }
}

export default Ingredient;
