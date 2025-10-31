const getCorsSettings = (environment) => {
  const corsWhitelist = process.env.CORS_WHITELIST?.split(" ") || ["*"];

  const corsSettings =
    environment === "development"
      ? ["*"]
      : {
          origin: function (origin, callback) {
            if (!origin || corsWhitelist.indexOf(origin) !== -1) {
              callback(null, true);
            } else {
              callback(new Error("CORS"));
            }
          },
          methods: "GET,POST,PUT,PATCH,DELETE",
          allowedHeaders: "Content-Type, Authorization, Client-App-Version",
          credentials: true,
          optionsSuccessStatus: 200,
        };

  return corsSettings;
};

module.exports = getCorsSettings;
