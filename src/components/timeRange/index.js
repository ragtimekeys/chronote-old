import { Svg } from "expo";
import _ from "lodash";
import React, { Component } from "react";
import Edit from "./edit";
import Polar from "./polar";

/*
  //Retrieving props from within the theme requires an arrow function
  //If being called from within the styled component, you would call getTheme like getTheme("black")
  const getTheme = key => props => props.theme[key];
*/

export default class TimeRangeSelect extends Component {
  polar = new Polar();

  radius = 44;
  innerRadius = 29;

  bigTickLength = 10;
  smallTickLength = 8;

  numFontSize = 7;

  hourIncAngle = Math.PI / 6;
  tickIncAngle = Math.PI / 30;

  outerStrokeWidth = this.props.isEditable ? 12 : 2;

  render() {
    const nums = _.range(12).map(i => (
      <Svg.Text
        x={this.polar.calculateXRadially(
          i * this.hourIncAngle,
          this.innerRadius
        )}
        y={this.polar.calculateYRadially(
          i * this.hourIncAngle,
          this.innerRadius
        )}
        fontSize={this.numFontSize}
        textAnchor="middle"
        alignmentBaseline="central"
        key={i}
      >
        {i === 0 ? 12 : i}
      </Svg.Text>
    ));

    const ticks = _.range(60).map(i => (
      <Svg.Line
        x1={this.polar.calculateXRadially(i * this.tickIncAngle, this.radius)}
        y1={this.polar.calculateYRadially(i * this.tickIncAngle, this.radius)}
        x2={this.polar.calculateXRadially(
          i * this.tickIncAngle,
          this.radius -
            (i % 5 === 0 ? this.bigTickLength : this.smallTickLength)
        )}
        y2={this.polar.calculateYRadially(
          i * this.tickIncAngle,
          this.radius -
            (i % 5 === 0 ? this.bigTickLength : this.smallTickLength)
        )}
        stroke="black"
        strokeWidth={0.75}
        key={i}
      />
    ));

    return (
      <Svg
        viewBox="0 0 100 100"
        style={{ flexGrow: 1, marginLeft: 25, marginRight: 25 }}
      >
        {ticks}
        {nums}
        {this.props.isEditable ? (
          <Edit
            // startTime={this.startTime}
            // endTime={this.endTime}
            // onChange={(startTime, endTime) => {}}
            outerStrokeWidth={this.outerStrokeWidth}
            radius={this.radius}
            polar={this.polar}
          />
        ) : (
          <Svg.Circle
            cx={this.props.centerOffset}
            cy={this.props.centerOffset}
            r={this.radius}
            stroke="black"
            strokeWidth={this.outerStrokeWidth}
            fill="none"
          />
        )}
      </Svg>
    );
  }
}
