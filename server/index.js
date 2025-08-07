import express from 'express';
import cors from 'cors';
import gamesRoutes from './routes/gamesRoutes.js';

const app = express();
const PORT = 8080;

app.use(cors());
app.use(express.json());

// Test route
app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello from Express!' });
});

// Use games routes
app.use('/api/games', gamesRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
