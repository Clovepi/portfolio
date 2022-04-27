import React, { Component } from "react";
import axios from "axios";

import PortfolioItem from "./portfolio-item";

export default class PortfolioContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Welcome to my portfolio",
      isLoading: false,
      data: [],
    };

    this.handleFilter = this.handleFilter.bind(this);
  }

  getPortfolioItems() {
    axios.get("https://cassandra.devcamp.space/portfolio/portfolio_items")
    .then(response => {
      console.log("Get response", response);
      this.setState({
        data: response.data.portfolio_items
      })
    })
    .catch(error => {
      console.log("There's an error", error);
    })
  }

  portfolioItems() {
    // Data that we'll need
    // - background image: thumb_image_url
    // -logo
    // -description: description
    // id: id (to use with slug)
    return this.state.data.map(item => {
      console.log("portfolio item", item)
      return <PortfolioItem key={item.id} item={item}/>
    })
  }

  componentDidMount() {
    this.getPortfolioItems();
  }

  handleFilter(filter) {
    this.setState({
      data: this.state.data.filter(item => {
        return item.category === filter;
      })
    });
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
        <h2>{this.state.pageTitle}</h2>

        <button onClick={() => this.handleFilter("eCommerce")}>
          eCommerce
        </button>
        <button onClick={() => this.handleFilter("Scheduling")}>
          Scheduling
        </button>
        <button onClick={() => this.handleFilter("Enterprise")}>
          Enterprise
        </button>

        {this.portfolioItems()}
      </div>
    );
  }
}
