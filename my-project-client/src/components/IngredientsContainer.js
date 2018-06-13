import React, { Component } from "react";
import IngredientsList from "./IngredientsList";
import SearchIngredients from "./SearchIngredients";

class IngredientsContainer extends Component {
  constructor() {
    super();

    this.state = {
      allIngredients: [],
      searchTermMatches: []
    };
  }
  componentDidMount() {
    fetch("http://localhost:3000/ingredients")
      .then(resp => resp.json())
      .then(jsonresp => this.setState({ allIngredients: jsonresp }));
  }

  handleSearchChange = event => {
    // console.log(event.target.value);
    let searchTerm = event.target.value;
    let ingredientMatches = this.state.allIngredients.filter(ingred => {
      return ingred.name.includes(searchTerm);
    });
    // console.log(ingredientMatches);
    this.setState({ searchTermMatches: ingredientMatches });
  };

  render() {
    const searchedIngreds =
      this.state.searchTermMatches.length > 0
        ? this.state.searchTermMatches
        : this.state.allIngredients;

    return (
      <div className="ui raised segment">
        <SearchIngredients searchFunc={this.handleSearchChange} />
        <IngredientsList
          allIngredients={searchedIngreds}
          handleIngredientClickAddition={
            this.props.handleIngredientClickAddition
          }
        />
      </div>
    );
  }
}

export default IngredientsContainer;
