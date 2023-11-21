const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const getCorsSettings = require("./utilities/getCorsSettings");
const apiRouter = require("./routes/apiRouter");

const app = express();
const environment = app.get("env");

const formatsLogger = environment === "development" ? "dev" : "short";
const corsSettings = getCorsSettings(environment);

app.use(logger(formatsLogger));
app.use(cors(corsSettings));
app.use(express.json());

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Not found" });
});

app.use((err, req, res, next) => {
  if (err.message === "CORS")
    return res.status(403).json({ status: "error", message: "Not allowed" });

  res.status(500).json({ status: "error", message: err.message });
});

module.exports = app;
