export const minutesToAngle = timeInMinutes =>
  timeInMinutes / 24 / 60 * 2 * Math.PI;

export const angleToMinutes = angleInRadians =>
  angleInRadians / 2 / Math.PI * 24 * 60;
