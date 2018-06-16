import React, { Component } from "react";

class Adjustments extends Component {
  render() {
    return (
      <div className="ui raised segment">
        Select adjustments :
        <div>
          <button
            id="4"
            className="ui button"
            style={{ width: 130, height: 30 }}
            onClick={this.props.handleGlutenFreeClick}
          >
            kosher
          </button>
          <button
            id="4"
            className="ui button"
            style={{ width: 130, height: 30 }}
            onClick={this.props.handleGlutenFreeClick}
          >
            gluten-free
          </button>
          <button
            id="4"
            className="ui button"
            style={{ width: 130, height: 30 }}
            onClick={this.props.handleGlutenFreeClick}
          >
            dairy-free
          </button>
        </div>
      </div>
    );
  }
}

export default Adjustments;
