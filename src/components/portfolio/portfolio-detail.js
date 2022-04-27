import React, { Component } from "react";

export default class PortfolioDetail extends Component {
    constructor() {
        super();
    }
    render() {
        return (
            <div>
                <h2>Portfolio Detail for {this.props.match.params.slug}</h2>
            </div>
        );
    }
}