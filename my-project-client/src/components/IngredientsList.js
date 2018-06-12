import React, { Component } from "react";
import Ingredient from "./Ingredient";

class IngredientsList extends Component {
  render() {
    return (
      <table className="ui celled striped padded table">
        <tbody>
          <tr>
            <th>
              <h3 className="ui left aligned header">Ingredients </h3>
            </th>
          </tr>
          {this.props.allIngredients.map(ingred => {
            return (
              <Ingredient
                key={ingred.id}
                ingredient={ingred}
                handleIngredientClick={this.props.handleIngredientClick}
              />
            );
          })}
        </tbody>
      </table>
    );
  }
}

export default IngredientsList;
