const express = require('express');
const cors = require('cors');
const aiRoutes = require('./src/routes/ai.routes');

const app = express();
app.use(cors());
app.use(express.json());

// Use route prefix '/ai'
app.use('/ai', aiRoutes);

app.get("/", (req, res) => {
  res.send("Backend is running successfully");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
     console.log(`Server running on port ${PORT}`) 
    });
