import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class UserRecipeIngredient extends Component {
  render() {
    return (
      <div className="ui raised segment">
        <Card color="red">
          <Card.Content>
            {this.props.ingredient.ingredient.name}
            <form className="ui form">
              <select className="ui fluid dropdown">
                <option value="1">Quantity</option>
                <option value="2">1</option>
                <option value="3">2</option>
                <option value="4">3</option>
              </select>
            </form>
          </Card.Content>
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
