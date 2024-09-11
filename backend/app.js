const express =  require('express');
const connectDB = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const dotenv = require('dotenv');
const cors = require('cors');
dotenv.config();

const app = express();

connectDB();

// Middleware
app.use(express.json());

app.use(cors());

// const cors = require('cors');
// app.use(cors());
// Routes
app.post('/api/signup', userRoutes);
app.post('/api/login', userRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
