const SECTIONS = [
  { name: "football", label: "Футбол", chatId: process.env.FOOTBALL_CHAT_ID },
  {
    name: "volleyball",
    label: "Волейбол",
    chatId: process.env.VOLLEYBALL_CHAT_ID,
  },
  {
    name: "climbing",
    label: "Скелелазіння",
    chatId: process.env.CLIMBING_CHAT_ID,
  },
  {
    name: "tennis",
    label: "Теніс настільний",
    chatId: process.env.TENNIS_CHAT_ID,
  },
  { name: "box", label: "Бокс", chatId: process.env.BOX_CHAT_ID },
  { name: "swimming", label: "Плавання", chatId: process.env.SWIMMING_CHAT_ID },
];

module.exports = SECTIONS;
