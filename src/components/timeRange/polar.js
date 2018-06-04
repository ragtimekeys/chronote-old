export default class Polar {
  constructor(centerOffset = 50, offsetAngle = Math.PI / 2) {
    this.centerOffset = centerOffset;
    this.offsetAngle = offsetAngle;
  }

  calculateXRadially = (angle, radius) =>
    -Math.cos(angle + this.offsetAngle) * radius + this.centerOffset;
  calculateYRadially = (angle, radius) =>
    -Math.sin(angle + this.offsetAngle) * radius + this.centerOffset;
}
