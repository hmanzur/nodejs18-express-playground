const { onRequest } = require('firebase-functions/v2/https');
const app = require("./app");

exports.api = onRequest({
  maxInstances: 10,
  secrets: [
    "POSTGRESQL_CONNECTION",
    "JWT_SECRET_KEY"
  ]
}, async (req, res) => {
  await require("./utils/postgresql").authenticate();
  return app(req, res);
});