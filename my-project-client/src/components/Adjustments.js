import React, { Component } from "react";

class Adjustments extends Component {
  render() {
    const kosheract = this.props.kosherclicker ? "active" : "";
    const glutenfreeact = this.props.glutenfreeclicker ? "active" : "";
    const dairyact = this.props.dairyclicker ? "active" : "";
    const veggieact = this.props.veggieclicker ? "active" : "";
    const lowcalorieact = this.props.lowcalorieclicker ? "active" : "";

    const colorkosheract = this.props.kosherclicker ? "red" : "";
    const colorglutenfreeact = this.props.glutenfreeclicker ? "yellow" : "";
    const colordairyact = this.props.dairyclicker ? "teal" : "";
    const colorveggieact = this.props.veggieclicker ? "green" : "";
    const colorlowcalorieact = this.props.lowcalorieclicker ? "purple" : "";

    return (
      <div className="ui raised segment">
        Select adjustments :
        <div>
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
          <button
            id="3"
            className={`ui ${colorveggieact} button ${veggieact}`}
            style={{ width: 130, height: 30 }}
            onClick={this.props.handleGlutenFreeClick}
          >
            Veggie
          </button>
          <button
            id="4"
            className={`ui ${colorglutenfreeact} button ${glutenfreeact}`}
            style={{ width: 130, height: 30 }}
            onClick={this.props.handleGlutenFreeClick}
          >
            gluten free
          </button>
          <button
            id="5"
            className={`ui ${colorlowcalorieact} button ${lowcalorieact}`}
            style={{ width: 130, height: 30 }}
            onClick={this.props.handleLowCalorieClick}
          >
            low calorie
          </button>
        </div>
      </div>
    );
  }
}

export default Adjustments;
