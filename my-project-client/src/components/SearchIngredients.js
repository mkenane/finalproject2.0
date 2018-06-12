import React, { Component } from "react";
import { Form } from "semantic-ui-react";

class SearchIngredients extends Component {
  render() {
    console.log(this.props);
    return (
      <Form>
        <div className="ui huge fluid icon input">
          <Form.Input
            type="text"
            placeholder="search for ingredient"
            onChange={event => this.props.searchFunc(event)}
          />
          <i className="circular search link icon" />
        </div>
      </Form>
    );
  }
}

export default SearchIngredients;
