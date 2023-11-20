const getBotUpdates = require("../services/getBotUpdates");
const sendDebugUserMessage = require("../services/sendDebugUserMessage");

const debugUserMessageController = async (req, res) => {
  try {
    const result = await getBotUpdates();

    let foundUserId = null;

    for (const { message } of result) {
      const { contact } = message;

      if (!contact) continue;

      const { phone_number: phoneNumber, user_id: userId } = contact;

      if (phoneNumber !== "380663344599") continue;

      foundUserId = userId;

      break;
    }

    if (!foundUserId)
      return res.status(404).json({
        status: "error",
        message: "User not found",
      });

    await sendDebugUserMessage(
      foundUserId,
      "Hi! Thank you, will be in touch ;)"
    );

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

module.exports = debugUserMessageController;
