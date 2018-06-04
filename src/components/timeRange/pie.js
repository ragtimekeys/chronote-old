import * as d3 from "d3-shape";
import { Svg } from "expo";
import React, { Component, Fragment } from "react";

export default class Pie extends Component {
  selectionStartAngle = 0.5 * Math.PI;
  selectionEndAngle = 0.75 * Math.PI;

  render() {
    const selectionPie = d3
      .arc()
      .innerRadius(0)
      .outerRadius(this.props.radius - this.props.outerStrokeWidth / 2)
      .startAngle(this.selectionStartAngle)
      .endAngle(this.selectionEndAngle)();

    return (
      <Svg.Path
        d={selectionPie}
        transform={`translate(
          ${this.props.polar.centerOffset},
          ${this.props.polar.centerOffset}
        )`}
        fill="yellow"
        fillOpacity="0.2"
      />
    );
  }
}
