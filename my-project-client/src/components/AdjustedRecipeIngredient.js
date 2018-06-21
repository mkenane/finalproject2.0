import React, { Component } from "react";
import { Card } from "semantic-ui-react";

class AdjustedRecipeIngredient extends Component {
  constructor(props) {
    super(props);

    this.state = {
      relationships: [],
      clickedMoreInfo: false,
      randomChefPhrases: [],
      infoToDisplay: ""
    };
  }

  componentDidMount() {
    fetch("http://localhost:3000/relationships")
      .then(resp => resp.json())
      .then(jsonresp => this.setState({ relationships: jsonresp }));
  }

  handleMoreInfo = () => {
    let memo = ``;
    let replacementingrid = this.state.relationships.filter(ingrid => {
      return ingrid.replacement_ingredient_id === this.props.ingredient.id;
    })[0];

    if (replacementingrid !== undefined) {
      memo = `We replaced ${replacementingrid.ingredient_name} with ${
        this.props.ingredient.name
      } because we have absolutely no clue, enjoy! `;

      this.setState({ infoToDisplay: memo });
      this.setState({ clickedMoreInfo: !this.state.clickedMoreInfo });
    } else {
      memo = "This ingredient was not replaced, luckily for you ";
      this.setState({ clickedMoreInfo: !this.state.clickedMoreInfo });
      this.setState({ infoToDisplay: memo });
    }
  };

  render() {
    const info = this.state.clickedMoreInfo ? this.state.infoToDisplay : "";

    return (
      <div className="ui raised segment">
        <Card>
          <Card.Content>{this.props.ingredient.name}</Card.Content>
          <Card.Content>{info}</Card.Content>
          <button
            className="ui button"
            style={{ width: 150, height: 30 }}
            onClick={this.handleMoreInfo}
          >
            <i className="question circle icon" />
          </button>
        </Card>
      </div>
    );
  }
}

export default AdjustedRecipeIngredient;
