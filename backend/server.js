const express = require('express');
const cors = require('cors');

const app = express();

// Test route
app.get('/test', (req, res) => {
  console.log('Test route hit!');
  res.json({ status: 'Backend is running!' });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});