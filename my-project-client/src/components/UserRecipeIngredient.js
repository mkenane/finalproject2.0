import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class UserRecipeIngredient extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <Card>
          <Card.Content>{this.props.ingredient.ingredient.name}</Card.Content>
          <button
            className="ui button"
            style={{ width: 150, height: 30 }}
            onClick={event =>
              this.props.handleIngredientClickRemoval(this.props)
            }
          >
            {" "}
            remove{" "}
          </button>
        </Card>
      </div>
    );
  }
}

export default UserRecipeIngredient;
