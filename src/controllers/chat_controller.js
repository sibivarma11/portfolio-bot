const handleChatMessage = (userInput) => {
  const input = userInput.toLowerCase();

  if (["hi", "hello", "hey"].includes(input)) {
    return "👋 Hey there! I'm Sibi's portfolio assistant. How can I help you today?";
  } 
  else if (input.includes("your name")) {
    return "I'm Sibi's personal chatbot 🤖 — here to help you learn more about him!";
  }
  else if (input.includes("who are you")) {
    return "I'm an AI-powered bot built by Sibi Varma to represent his work and help you explore his portfolio.";
  }
  else if (input.includes("sibi")) {
    return "Sibi Varma is a passionate web developer from Coimbatore. He builds engaging, responsive web apps using the MERN stack and loves to learn about AI and cybersecurity!";
  }
  else if (input.includes("skills")) {
    return "Sibi is skilled in React, Next.js, Node.js, Express, MongoDB, PostgreSQL, Tailwind, Docker, and AWS.";
  }
  else if (input.includes("projects")) {
    return "Sibi has built an e-commerce platform, task manager, weather dashboard, and social media analytics app — you can check them out on the Projects section!";
  }
  else if (input.includes("contact")) {
    return "You can reach Sibi at 📧 sibivarma11@gmail.com or 📱 +91 90805 71423.";
  }
  else if (input.includes("resume")) {
    return "You can download Sibi's resume from the About section on his portfolio.";
  }
  else {
    return "Hmm 🤔 I'm not sure I understood that. Try asking about Sibi's skills, projects, or how to contact him!";
  }
};

module.exports = { handleChatMessage };