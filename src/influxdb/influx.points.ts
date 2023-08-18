import { Point } from '@influxdata/influxdb-client';

export const PointSCD40 = (
  co2: number,
  temperatura: number,
  humedad: number,
) => {
  const point = new Point('scd40')
    .tag('location', 'smargrow')
    .floatField('co2', co2)
    .floatField('temperature', temperatura)
    .floatField('humidity', humedad)
    .timestamp(new Date());
  return point;
};
