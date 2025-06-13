const express = require('express');
const cors = require('cors');
const contactRoute = require('./routes/contact');
require('dotenv').config();

// const cors = require('cors');
// app.use(cors());

// dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

// const contactRoute = require('./routes/contact');
app.use('/api/contact', contactRoute);



app.get('/', (req, res) => {
  res.send('API is working!');
});

const PORT = process.env.PORT ||5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
