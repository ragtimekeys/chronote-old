import React, { Component, PureComponent } from "react";
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

  radius = 50;
  innerRadius = 40;

  centerOffset = 51.5;
  offsetAngle = Math.PI / 2;

  bigTickLength = 4.5;
  smallTickLength = 3;

  hourIncAngle = Math.PI / 6;
  tickIncAngle = Math.PI / 30;

  calculateXRadially = (angle, radius) =>
    -Math.cos(angle + this.offsetAngle) * radius + this.centerOffset;
  calculateYRadially = (angle, radius, offset = this.centerOffset) =>
    -Math.sin(angle + this.offsetAngle) * radius + offset;

  render() {
    const nums = _.range(12).map(i => (
      <Svg.Text
        x={this.calculateXRadially(i * this.hourIncAngle, this.innerRadius)}
        y={this.calculateYRadially(
          i * this.hourIncAngle,
          this.innerRadius,
          54.4
        )}
        fontSize={7}
        textAnchor="middle"
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
        key={i}
      />
    ));

    return (
      <Svg viewBox="0 0 103 103" style={{ flexGrow: 1 }}>
        <Svg.Circle
          cx={this.centerOffset}
          cy={this.centerOffset}
          r={this.radius}
          stroke="black"
          strokeWidth={3}
          fill="none"
        />
        {nums}
        {ticks}
      </Svg>
    );
  }
}
