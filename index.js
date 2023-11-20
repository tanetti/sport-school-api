require("dotenv").config();

const app = require("./src/app");

const appPort = process.env.PORT || 8822;

const startServer = (appPort) => {
  app.listen(appPort, () => {
    console.log(`\x1b[34mServer running. Use API on port: ${appPort}`);
  });
};

console.log("Application starting...");

startServer(appPort);
