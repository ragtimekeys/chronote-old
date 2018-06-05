export const minutesToAngle = timeInMinutes =>
  timeInMinutes / 12 / 60 * 2 * Math.PI;

export const angleToMinutes = angleInRadians =>
  angleInRadians / 2 / Math.PI * 12 * 60;
