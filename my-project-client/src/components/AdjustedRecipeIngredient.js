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
    console.log(this.props);
    let replacementingrid = this.state.relationships.filter(ingrid => {
      return ingrid.replacement_ingredient_id === this.props.ingredient.id;
    })[0];
    let memo = `We replaced ${replacementingrid.ingredient_name} with ${
      this.props.ingredient.name
    } because it -replacementingrid.nature- and because --random(randomChefPhrases) `;
    console.log(replacementingrid);
    console.log(memo);
    this.setState({ infoToDisplay: memo });
    this.setState({ clickedMoreInfo: !this.state.clickedMoreInfo });
  };

  render() {
    const info = this.state.clickedMoreInfo ? this.state.infoToDisplay : "";
    console.log(this.state.clickedMoreInfo);
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
