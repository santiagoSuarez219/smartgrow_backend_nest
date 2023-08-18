import { registerAs } from '@nestjs/config';

export default registerAs('config', () => {
  return {
    mongo: {
      dbName: process.env.MONGO_DB,
      user: process.env.MONGO_INITDB_ROOT_USERNAME,
      password: process.env.MONGO_INITDB_ROOT_PASSWORD,
      port: parseInt(process.env.MONGO_PORT, 10),
      host: process.env.MONGO_HOST,
      connection: process.env.MONGO_CONNECTION,
    },
    influxdb: {
      host: process.env.INFLUXDB_HOST,
      port: parseInt(process.env.INFLUXDB_PORT, 10),
      token: process.env.INFLUXDB_TOKEN,
      org: process.env.INFLUXDB_ORG,
      bucket: process.env.INFLUXDB_BUCKET,
    },
    mqtt: {
      host: process.env.MQTT_HOST,
      port: parseInt(process.env.MQTT_PORT, 10),
    },
  };
});
