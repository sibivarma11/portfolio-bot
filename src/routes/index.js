const router = require('express').Router();

// Basic chatbot route
router.post('/chat', async (req, res) => {
  try {
    const userInput = req.body.msg?.toLowerCase();

    if (!userInput) {
      return res.status(400).json({ reply: "Please say something 😅" });
    }

    let reply = "";

    // Basic conversational logic
    if (["hi", "hello", "hey"].includes(userInput)) {
      reply = "👋 Hey there! I'm Sibi’s portfolio assistant. How can I help you today?";
    } 
    else if (userInput.includes("your name")) {
      reply = "I'm Sibi's personal chatbot 🤖 — here to help you learn more about him!";
    }
    else if (userInput.includes("who are you")) {
      reply = "I'm an AI-powered bot built by Sibi Varma to represent his work and help you explore his portfolio.";
    }
    else if (userInput.includes("sibi")) {
      reply = "Sibi Varma is a passionate web developer from Coimbatore. He builds engaging, responsive web apps using the MERN stack and loves to learn about AI and cybersecurity!";
    }
    else if (userInput.includes("skills")) {
      reply = "Sibi is skilled in React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Tailwind, Docker, and AWS.";
    }
    else if (userInput.includes("projects")) {
      reply = "Sibi has built an e-commerce platform, task manager, weather dashboard, and social media analytics app — you can check them out on the Projects section!";
    }
    else if (userInput.includes("contact")) {
      reply = "You can reach Sibi at 📧 sibivarma11@gmail.com or 📱 +91 90805 71423.";
    }
    else if (userInput.includes("resume")) {
      reply = "You can download Sibi’s resume from the About section on his portfolio.";
    }
    else {
      reply = "Hmm 🤔 I’m not sure I understood that. Try asking about Sibi’s skills, projects, or how to contact him!";
    }

    return res.status(200).json({ reply });
  } catch (err) {
    console.error(err);
    res.status(500).json({ reply: "Something went wrong 😅" });
  }
});

module.exports = router;
