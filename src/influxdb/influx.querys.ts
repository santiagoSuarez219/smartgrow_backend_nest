export const queries = {
  getSensorData: (bucket: string, collection: string) => `
    from(bucket: "${bucket}")
      |> range(start: -1h)
      |> filter(fn: (r) => r._measurement == "${collection}")`,

  getSensorsByLocation: (location: string) => `
    from(bucket: "your_bucket")
      |> range(start: -1h)
      |> filter(fn: (r) => r._measurement == "sensor_data" and r.location == "${location}")
      |> pivot(rowKey:["_time"], columnKey: ["_field"], valueColumn: "_value")
  `,

  getFlowData: () => `
    from(bucket: "your_bucket")
      |> range(start: -1h)
      |> filter(fn: (r) => r._measurement == "flow_data")
  `,
};
