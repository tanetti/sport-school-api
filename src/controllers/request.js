const sendRequestMessage = require("../services/sendRequestMessage");

const requestController = async (req, res) => {
  try {
    await sendRequestMessage(req.requestText);

    res.json({
      status: "success",
      message: "Message sent successfully",
    });
  } catch ({ response }) {
    res.status(response?.status || 500).json({
      status: "error",
      message: response?.statusText || "Error while sending message",
    });
  }
};

module.exports = requestController;
