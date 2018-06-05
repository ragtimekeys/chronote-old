import * as d3 from "d3-shape";
import { Svg } from "expo";
import React, { Component, Fragment } from "react";
import { minutesToAngle } from "./angleTimeConversion";

export default class Pie extends Component {
  render() {
    const startAngle = minutesToAngle(this.props.startTime);
    const endAngle = minutesToAngle(this.props.endTime);

    const pie = d3
      .arc()
      .innerRadius(0)
      .outerRadius(this.props.radius - this.props.outerStrokeWidth / 2)
      .startAngle(startAngle)
      .endAngle(endAngle)();

    return (
      <Svg.Path
        d={pie}
        transform={`translate(
          ${this.props.polar.centerOffset},
          ${this.props.polar.centerOffset}
        )`}
        fill={this.props.color}
        fillOpacity={this.props.fillOpacity}
      />
    );
  }
}
