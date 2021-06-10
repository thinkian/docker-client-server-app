const cors = require('cors');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

app.get('/api', (_req, res) => {
  res.send({ data: 'Node.js' });
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
