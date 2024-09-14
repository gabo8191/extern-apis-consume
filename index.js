const express = require('express');
const axios = require('axios');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/api/datos', async (req, res) => {
  try {
    const [response1, response2] = await Promise.all([
      axios.get('https://logotypes.dev/random/data'),
      axios.get('https://api.jikan.moe/v4/random/anime'),

    ]);

    const datos = {
      logotype: response1.data,
      anime: response2.data,
    };

    res.json(datos);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
