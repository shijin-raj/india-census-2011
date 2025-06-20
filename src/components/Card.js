import React, { Component } from "react";
import "../card.css";
import Counter from "../components/Counter";

import { PieChart } from '@mui/x-charts/PieChart';

class Card extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const state_data = this.props.data;
    // const recovery_perc = (parseInt(state_data.recovered)/parseInt(state_data.confirmed))*100;
    //const death_perc = (parseInt(state_data.deceased)/parseInt(state_data.confirmed))*100;
const total_pops = parseInt(state_data?.population_persons?.replace(/,/g, ''));
const male_pops = parseInt(state_data?.population_males?.replace(/,/g, ''));
const female_pops = parseInt(state_data?.population_females?.replace(/,/g, ''));
const male_perc = ((male_pops/total_pops)*100).toFixed(2);
const female_perc = ((female_pops/total_pops)*100).toFixed(2);;

    return (
      <div
        className="card"
      >
        <h3>{this.props.title} <span>{state_data.total_rural_urban}</span></h3>
        <div>{state_data.india_state_union_territory_district_subdistrict}</div>
        <div>
          {/* <Counter counterTitle="Population" counterValue={parseInt(state_data.total.population).toLocaleString()} progress="100%"/> */}
       <h6>Total population : <span>{state_data?.population_persons}</span></h6>
        </div>
        <PieChart
      series={[
        {
          data: [
            { id: 0, value: male_pops, label: `Male (${male_perc}%)`},
            { id: 1, value: female_pops, label: `Female (${female_perc}%)` },
          ],
        },
      ]}
      width={200}
      height={200}
    />
      </div>
    );
  }
}

export default Card;
