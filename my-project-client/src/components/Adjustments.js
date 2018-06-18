import React, { Component } from "react";

class Adjustments extends Component {
  render() {
    // console.log(this.props);
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
            className="ui button"
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
