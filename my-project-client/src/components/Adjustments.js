import React, { Component } from "react";

class Adjustments extends Component {
  constructor() {
    super();

    this.state = {
      clicked: false
    };
  }

  render() {
    const act = this.state.clicked ? "active" : "";
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
            gluten free
          </button>
          <button
            id="1"
            className={`ui button ${act}`}
            style={{ width: 130, height: 30 }}
            onClick={this.props.handleKosherFreeClick}
          >
            kosher
          </button>
          <button
            id="2"
            className="ui button"
            style={{ width: 130, height: 30 }}
            onClick={this.props.handleDairyFreeClick}
          >
            dairy-free
          </button>
        </div>
      </div>
    );
  }
}

export default Adjustments;
