const getCorsSettings = (environment) => {
  const corsWhitelist = process.env.CORS_WHITELIST?.split(" ") || ["*"];

  const corsSettings =
    environment === "development"
      ? null
      : {
          origin: function (origin, callback) {
            if (corsWhitelist.indexOf(origin) !== -1) {
              callback(null, true);
            } else {
              callback(new Error("Not allowed"));
            }
          },
          optionsSuccessStatus: 200,
        };

  return corsSettings;
};

module.exports = getCorsSettings;
