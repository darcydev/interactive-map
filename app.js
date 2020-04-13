require('dotenv').config();
const express = require('express');
const fetch = require('node-fetch');

const app = express();
const port = process.env.PORT || 8000;

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  if (req.method === 'OPTIONS') return res.sendStatus(200);
  next();
});

app.get('/api', (req, res) => {
  const { origin, destination } = req.query;

  // const waypoints = `-33.7125,150.3119,-33.4827,150.157,-33.4193,149.5775,-33.2833,149.1`;
  const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${process.env.GOOGLE_DIRECTIONS_API_KEY}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => res.send(data))
    .catch((err) => console.error(err));
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
