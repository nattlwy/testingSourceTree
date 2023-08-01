const express = require('express');
const mongoose = require('mongoose');

const app = express();
const port = 7000;


const mongoURI = 'mongodb+srv://testuser:12345testuser@nodeexpress-jwt-test.8pysrbz.mongodb.net/?retryWrites=true&w=majority';


mongoose
  .connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'Exam'
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


const Quiz = mongoose.model('Quiz', {
  name: String,
  sid: String,
});


app.get('/', async (req, res) => {
  try {
    // Create a new quiz document
    const quiz = new Quiz({
      name: 'Wing Yee LAM',
      sid: '300368368',
    });

    // Save the document to the database
    await quiz.save();

    res.send('Quiz document created successfully!');
  } catch (err) {
    console.error('Error creating quiz document:', err);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}/`);
});
