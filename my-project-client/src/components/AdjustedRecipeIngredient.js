import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class AdjustedRecipeIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = { relationships: [] };
  }

  componentDidMount() {
    fetch("http://localhost:3000/relationships")
      .then(resp => resp.json())
      .then(jsonresp => this.setState({ relationships: jsonresp }));
  }

  render() {
    console.log(this.state);
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
