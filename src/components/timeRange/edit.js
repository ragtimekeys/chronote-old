import * as d3 from "d3-shape";
import { Svg } from "expo";
import React, { Component, Fragment } from "react";

export default class Edit extends Component {
  selectionStartAngle = 0.5 * Math.PI;
  selectionEndAngle = 0.75 * Math.PI;
  selectionStrokeWidth = 1;

  render() {
    const selectionPie = d3
      .arc()
      .innerRadius(0)
      .outerRadius(this.props.radius - this.props.outerStrokeWidth / 2)
      .startAngle(this.selectionStartAngle)
      .endAngle(this.selectionEndAngle)();

    const selectionArc = d3
      .arc()
      .innerRadius(this.props.radius - this.props.outerStrokeWidth / 2)
      .outerRadius(this.props.radius + this.props.outerStrokeWidth / 2)
      .startAngle(this.selectionStartAngle)
      .endAngle(this.selectionEndAngle)();

    const nonSelectionArc = d3
      .arc()
      .innerRadius(this.props.radius - this.props.outerStrokeWidth / 2)
      .outerRadius(this.props.radius + this.props.outerStrokeWidth / 2)
      .startAngle(this.selectionEndAngle)
      .endAngle(2 * Math.PI + this.selectionStartAngle)();

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
        <Svg.Path
          d={selectionPie}
          transform={`translate(
            ${this.props.polar.centerOffset},
            ${this.props.polar.centerOffset}
          )`}
          fill="yellow"
          fillOpacity="0.2"
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
            this.selectionStartAngle,
            this.props.radius
          )}
          cy={this.props.polar.calculateYRadially(
            this.selectionStartAngle,
            this.props.radius
          )}
          r={(this.props.outerStrokeWidth - this.selectionStrokeWidth) / 2}
          fill="yellow"
          stroke="black"
          strokeWidth={this.selectionStrokeWidth}
        />
        <Svg.Circle
          cx={this.props.polar.calculateXRadially(
            this.selectionEndAngle,
            this.props.radius
          )}
          cy={this.props.polar.calculateYRadially(
            this.selectionEndAngle,
            this.props.radius
          )}
          r={(this.props.outerStrokeWidth - this.selectionStrokeWidth) / 2}
          fill="yellow"
          stroke="black"
          strokeWidth={this.selectionStrokeWidth}
        />
      </Fragment>
    );
  }
}
