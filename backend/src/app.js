const express = require('express');
const aiRoutes = require('./routes/ai.routes');
const cors = require('cors');

const app = express();

//Allow CORS from your frontend (Vite)
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));

app.use(express.json()); // parsing JSON
app.get('/', (req, res) => {
  res.send("Hello world from backend!");
});

app.use('/ai', aiRoutes);

module.exports = app;
