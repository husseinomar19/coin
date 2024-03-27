// server.js
// server.js

const express = require('express');
const axios = require('axios');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/api/giveaways', async (req, res) => {
  try {
    const response = await axios.get('https://www.gamerpower.com/api/giveaways', {
      headers: {
        'User-Agent': 'Your-User-Agent', // Voeg eventueel de user-agent toe om te simuleren dat het verzoek van een browser komt
      },
    });

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

