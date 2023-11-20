const express = require("express");
const logger = require("morgan");
const cors = require("cors");

const app = express();

const corsProductionOptions = {
  origin: process.env.CORS_ORIGIN,
  optionsSuccessStatus: 200,
};
const corsOptions =
  app.get("env") === "development" ? null : corsProductionOptions;
const formatsLogger = app.get("env") === "development" ? "dev" : "short";

const homeRouter = require("./routes/homeRouter");
const apiRouter = require("./routes/apiRouter");

app.use(logger(formatsLogger));
app.use(cors(corsOptions));
app.use(express.json());

app.use("/", homeRouter);

app.use("/api", apiRouter);

app.use((req, res) => {
  res.status(404).json({ status: "error", message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ status: "error", message: err.message });
});

module.exports = app;
