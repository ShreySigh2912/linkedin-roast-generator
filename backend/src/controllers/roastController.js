const { generateRoast, getRandomRoast } = require('../services/roastGenerator');

const handleRoast = async (req, res) => {
  try {
    const { url } = req.body;
    
    // For now, use random roasts
    const roast = await generateRoast();
    
    res.json({ roast });
  } catch (error) {
    console.error('Error generating roast:', error);
    res.status(500).json({ error: 'Failed to generate roast' });
  }
};

const handleRandomRoast = async (req, res) => {
  try {
    const roast = getRandomRoast();
    res.json({ roast });
  } catch (error) {
    console.error('Error generating random roast:', error);
    res.status(500).json({ error: 'Failed to generate roast' });
  }
};

module.exports = {
  handleRoast,
  handleRandomRoast
};