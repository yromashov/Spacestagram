const express = require('express');
const app = express();
const path = require('path');
const PORT = 1337;
const axios = require('axios');
require('dotenv').config()

const morgan = require('morgan');
app.use(morgan('dev'));

app.use(express.static(path.join(__dirname, '../public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/userprofile', function (req, res) {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.get('/apicall', async function (req, res) {
  try {
    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: process.env.KEY,
        start_date: '2021-09-01',
        end_date: '2021-09-14',
      },
    });
    res.send(response.data);
  } catch (err) {
    console.log(err);
  }
});

app.listen(process.env.PORT || PORT, () => {
  console.log(`listening on port ${PORT}`);
});
