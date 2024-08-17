const mongoose = require('mongoose');
const dotenv = require('dotenv');
const fs = require('fs');
const Article = require('./models/Articles');

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.log('Error connecting to MongoDB:', err));

// Load data
const loadData = async () => {
  try {
    const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));
    await Article.insertMany(data);
    console.log('Data loaded successfully');
    process.exit();
  } catch (err) {
    console.error('Error while loading data: ', err);
    process.exit(1);
  }
};

loadData();
