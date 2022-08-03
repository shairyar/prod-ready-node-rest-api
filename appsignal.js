const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  active: true,
  name: "node-app",
  logLevel: "trace",
  logPath: "logs"
});

module.exports = { appsignal };
