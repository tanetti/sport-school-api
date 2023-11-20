const wakeupController = async (req, res) => {
  res.json({
    status: "success",
    message: "API waked up",
  });
};

module.exports = wakeupController;
