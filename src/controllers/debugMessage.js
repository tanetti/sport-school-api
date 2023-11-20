const sendDebugMessage = require("../services/sendDebugMessage");

const debugMessageController = async (req, res) => {
  try {
    await sendDebugMessage(req.debugText);

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

module.exports = debugMessageController;
