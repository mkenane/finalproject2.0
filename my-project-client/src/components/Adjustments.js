import React, { Component } from "react";

class Adjustments extends Component {
  render() {
    return (
      <div className="ui raised segment">
        Select adjustments :
        <div>
          <button className="ui button" style={{ width: 130, height: 30 }}>
            gluten-free
          </button>
        </div>
      </div>
    );
  }
}

export default Adjustments;
