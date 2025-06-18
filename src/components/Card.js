import React, { Component } from "react";
import "../card.css";
import Counter from "../components/Counter";
class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "none",
      hint: "Click to view details",
      isActive: false,
    };
  }
  toggleDisplayState = () => {
    let new_display_state = this.state.display === "none" ? "block" : "none";
    let is_active = new_display_state === "none" ? false : true;
    this.setState({ display: new_display_state, isActive: is_active });
  };
  render() {
    const state_data = this.props.data;
    // const recovery_perc = (parseInt(state_data.recovered)/parseInt(state_data.confirmed))*100;
    //const death_perc = (parseInt(state_data.deceased)/parseInt(state_data.confirmed))*100;

    let hint;
    if (this.state.isActive) {
      hint = "";
    } else hint = this.state.hint;

    return (
      <div
        className="card"
        onClick={this.toggleDisplayState}
        style={{ background: this.state.color }}
      >
        <h3>{this.props.title}</h3>
        <p>{hint}</p>
        <div style={{ display: this.state.display }}>
          {/* <Counter counterTitle="Population" counterValue={parseInt(state_data.total.population).toLocaleString()} progress="100%"/> */}
          <Counter
            counterTitle="Name"
            counterValue={state_data.name}
            progress="100%"
          />
          <Counter
            counterTitle="Population"
            counterValue={state_data.population_persons}
            progress="100%"
          />
        </div>
      </div>
    );
  }
}

export default Card;
