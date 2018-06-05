import * as d3 from "d3-shape";
import { Svg } from "expo";
import Pie from "./pie";
import React, { Component, Fragment } from "react";
import { minutesToAngle } from "./angleTimeConversion";

export default class Edit extends Component {
  selectionStrokeWidth = 1;

  render() {
    const startAngle = minutesToAngle(this.props.startTime);
    const endAngle = minutesToAngle(this.props.endTime);
    const selectionPie = d3
      .arc()
      .innerRadius(0)
      .outerRadius(this.props.radius - this.props.outerStrokeWidth / 2)
      .startAngle(startAngle)
      .endAngle(endAngle)();

    const selectionArc = d3
      .arc()
      .innerRadius(this.props.radius - this.props.outerStrokeWidth / 2)
      .outerRadius(this.props.radius + this.props.outerStrokeWidth / 2)
      .startAngle(startAngle)
      .endAngle(endAngle)();

    const nonSelectionArc = d3
      .arc()
      .innerRadius(this.props.radius - this.props.outerStrokeWidth / 2)
      .outerRadius(this.props.radius + this.props.outerStrokeWidth / 2)
      .startAngle(endAngle)
      .endAngle(2 * Math.PI + startAngle)();

    return (
      <Fragment>
        <Svg.Path
          d={nonSelectionArc}
          transform={`translate(
            ${this.props.polar.centerOffset},
            ${this.props.polar.centerOffset}
          )`}
          fill="black"
        />
        <Pie
          polar={this.props.polar}
          radius={this.props.radius}
          outerStrokeWidth={this.props.outerStrokeWidth}
          startTime={this.props.startTime}
          endTime={this.props.endTime}
          color={"yellow"}
          fillOpacity={0.4}
        />
        <Svg.Path
          d={selectionArc}
          transform={`translate(
            ${this.props.polar.centerOffset},
            ${this.props.polar.centerOffset}
          )`}
          fill="yellow"
        />
        <Svg.Circle
          cx={this.props.polar.calculateXRadially(
            startAngle,
            this.props.radius
          )}
          cy={this.props.polar.calculateYRadially(
            startAngle,
            this.props.radius
          )}
          r={(this.props.outerStrokeWidth - this.selectionStrokeWidth) / 2}
          fill="yellow"
          stroke="black"
          strokeWidth={this.selectionStrokeWidth}
          onPressIn={() => {
            this.props.onChange(this.props.startTime - 60, this.props.endTime);
          }}
        />
        <Svg.Circle
          cx={this.props.polar.calculateXRadially(endAngle, this.props.radius)}
          cy={this.props.polar.calculateYRadially(endAngle, this.props.radius)}
          r={(this.props.outerStrokeWidth - this.selectionStrokeWidth) / 2}
          fill="yellow"
          stroke="black"
          strokeWidth={this.selectionStrokeWidth}
          onPressIn={() => {
            this.props.onChange(this.props.startTime, this.props.endTime + 60);
          }}
        />
      </Fragment>
    );
  }
}
