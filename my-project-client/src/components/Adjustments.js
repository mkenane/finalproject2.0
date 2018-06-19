import React, { Component } from "react";

class Adjustments extends Component {
  render() {
    const kosheract = this.props.kosherclicker ? "active" : "";
    const glutenfreeact = this.props.glutenfreeclicker ? "active" : "";
    const dairyact = this.props.dairyclicker ? "active" : "";

    const colorkosheract = this.props.kosherclicker ? "red" : "";
    const colorglutenfreeact = this.props.glutenfreeclicker ? "yellow" : "";
    const colordairyact = this.props.dairyclicker ? "teal" : "";

    return (
      <div className="ui raised segment">
        Select adjustments :
        <div>
          <button
            id="4"
            className={`ui ${colorglutenfreeact} button ${glutenfreeact}`}
            style={{ width: 130, height: 30 }}
            onClick={this.props.handleGlutenFreeClick}
          >
            gluten free
          </button>
          <button
            id="1"
            className={`ui ${colorkosheract} button ${kosheract}`}
            style={{ width: 130, height: 30 }}
            onClick={this.props.handleKosherClick}
          >
            kosher
          </button>
          <button
            id="2"
            className={`ui ${colordairyact} button ${dairyact}`}
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
