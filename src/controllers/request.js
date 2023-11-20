const sendRequestMessage = require("../services/sendRequestMessage");
const getChatId = require("../utilities/getChatId");

const requestController = async (req, res) => {
  const {
    body: { section },
  } = req;

  try {
    const chatId = getChatId(section);

    await sendRequestMessage({ chatId, text: req.requestText });

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
