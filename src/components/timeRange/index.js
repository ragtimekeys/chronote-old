import { Svg } from "expo";
import _ from "lodash";
import React, { Component, Fragment } from "react";
import Edit from "./edit";
import Pie from "./pie";
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

  bigTickLength = 4;
  smallTickLength = 2;

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

    const tickRadius = this.radius - this.outerStrokeWidth / 2;
    const ticks = _
      .range(60)
      .map(i => (
        <Svg.Line
          x1={this.polar.calculateXRadially(i * this.tickIncAngle, tickRadius)}
          y1={this.polar.calculateYRadially(i * this.tickIncAngle, tickRadius)}
          x2={this.polar.calculateXRadially(
            i * this.tickIncAngle,
            tickRadius -
              (i % 5 === 0 ? this.bigTickLength : this.smallTickLength)
          )}
          y2={this.polar.calculateYRadially(
            i * this.tickIncAngle,
            tickRadius -
              (i % 5 === 0 ? this.bigTickLength : this.smallTickLength)
          )}
          stroke="black"
          strokeWidth={0.75}
          key={i}
        />
      ));

    const currentTimeRanges = [
      <Pie
        key={0}
        polar={this.polar}
        radius={this.radius}
        outerStrokeWidth={this.outerStrokeWidth}
        startTime={60 * 7}
        endTime={60 * 13}
        color={"blue"}
        fillOpacity={0.2}
      />
    ];

    return (
      <Svg
        viewBox="0 0 100 100"
        style={{ height: 600, marginLeft: 25, marginRight: 25 }}
      >
        {currentTimeRanges}
        {this.props.isEditable ? (
          <Edit
            startTime={this.props.startTime}
            endTime={this.props.endTime}
            onChange={(startTime, endTime) =>
              this.props.onChange(startTime, endTime)
            }
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
        {ticks}
        {nums}
      </Svg>
    );
  }
}
