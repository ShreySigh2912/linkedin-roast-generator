const getRandomRoast = () => {
  const roasts = [
    "Oh look, another 'Results-Driven Professional' whose biggest achievement is surviving 47 consecutive Zoom meetings without falling asleep!",
    "Your LinkedIn profile reads like it was written by an AI that was trained exclusively on corporate buzzword bingo cards.",
    "'Passionate problem solver' - is that what we're calling 'Googling stack overflow' these days?",
    "I see you're a 'Thought Leader'. Let me guess, your thoughts usually lead to extending meeting times by 30 minutes?",
    "'Innovative strategist' - because 'Professional Email Forwarder' didn't sound impressive enough?"
  ];

  return roasts[Math.floor(Math.random() * roasts.length)];
};

const generateRoast = async (profile = null) => {
  // For now, just return a random roast
  // Later we'll use the profile data to generate personalized roasts
  return getRandomRoast();
};

module.exports = { generateRoast, getRandomRoast };