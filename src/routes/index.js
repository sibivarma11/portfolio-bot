const router = require('express').Router();
const { handleChatMessage } = require('../controllers/chat_controller');

router.get('/test', (req, res) => {
  res.send('Hello World!');
});

router.post('/chat', async (req, res) => {
  try {
    const userInput = req.body.msg;

    if (!userInput) {
      return res.status(400).json({ reply: "Please say something 😅" });
    }

    const reply = handleChatMessage(userInput);
    return res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Something went wrong 😅" });
  }
});

module.exports = router;