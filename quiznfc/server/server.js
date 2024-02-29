const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());


app.use(express.static('Server'));


app.get('/api/questions', (req, res) => {
  try {
    const questions = require('./questions.json');
    res.json(questions);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.get('/api/answers', (req, res) => {
  try {
    const answers = require('./answers.json');
    res.json(answers);
  } catch (error) {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
