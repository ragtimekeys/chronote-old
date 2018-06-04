import React, { Component, PureComponent } from "react";
import * as d3 from "d3-shape";
import { Text, View } from "react-native";
import { Svg } from "expo";
import _ from "lodash";

/*
  //Retrieving props from within the theme requires an arrow function
  //If being called from within the styled component, you would call getTheme like getTheme("black")
  const getTheme = key => props => props.theme[key];
*/

export default class TimeRangeSelect extends Component {
  state = {};

  radius = 45;
  innerRadius = 31;

  centerOffset = 50;
  offsetAngle = Math.PI / 2;

  bigTickLength = 9;
  smallTickLength = 7;

  numFontSize = 7;

  hourIncAngle = Math.PI / 6;
  tickIncAngle = Math.PI / 30;

  outerStrokeWidth = 10;

  calculateXRadially = (angle, radius) =>
    -Math.cos(angle + this.offsetAngle) * radius + this.centerOffset;
  calculateYRadially = (angle, radius) =>
    -Math.sin(angle + this.offsetAngle) * radius + this.centerOffset;

  render() {
    const nums = _.range(12).map(i => (
      <Svg.Text
        x={this.calculateXRadially(i * this.hourIncAngle, this.innerRadius)}
        y={this.calculateYRadially(i * this.hourIncAngle, this.innerRadius)}
        fontSize={this.numFontSize}
        textAnchor="middle"
        alignmentBaseline="central"
        key={i}
      >
        {i === 0 ? 12 : i}
      </Svg.Text>
    ));

    /* ticks */

    const ticks = _.range(60).map(i => (
      <Svg.Line
        x1={this.calculateXRadially(i * this.tickIncAngle, this.radius)}
        y1={this.calculateYRadially(i * this.tickIncAngle, this.radius)}
        x2={this.calculateXRadially(
          i * this.tickIncAngle,
          this.radius -
            (i % 5 === 0 ? this.bigTickLength : this.smallTickLength)
        )}
        y2={this.calculateYRadially(
          i * this.tickIncAngle,
          this.radius -
            (i % 5 === 0 ? this.bigTickLength : this.smallTickLength)
        )}
        stroke="black"
        strokeWidth={0.75}
        key={i}
      />
    ));

    const archLinux = d3
      .arc()
      .innerRadius(0)
      .outerRadius(this.radius - this.outerStrokeWidth / 2)
      .startAngle(0.5 * Math.PI)
      .endAngle(0.75 * Math.PI)();

    return (
      <Svg
        viewBox="0 0 100 100"
        style={{ flexGrow: 1, marginLeft: 25, marginRight: 25 }}
      >
        {ticks}

        <Svg.Circle
          cx={this.centerOffset}
          cy={this.centerOffset}
          r={this.radius}
          stroke="black"
          strokeWidth={this.outerStrokeWidth}
          fill="none"
        />

        {nums}

        <Svg.Path
          d={archLinux}
          transform="translate(50, 50)"
          fill="yellow"
          fillOpacity="0.2"
        />
      </Svg>
    );
  }
}
