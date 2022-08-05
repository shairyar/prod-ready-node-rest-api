const { Appsignal } = require("@appsignal/nodejs");

const appsignal = new Appsignal({
  active: true,
  name: "node-app",
  logLevel: "trace",
  log: "stdout"
});

module.exports = { appsignal };
