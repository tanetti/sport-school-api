const homeController = async (req, res) => {
  res.json({
    status: "success",
    message: "Server is running",
  });
};

module.exports = homeController;
