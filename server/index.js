const express = require('express');
const app = express();
const path = require('path');
const PORT = 1337;
const axios = require('axios');
const { DateTime } = require('luxon');
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
  const date = DateTime.now();
  const year = date.year;
  const month = date.month;
  const day = date.day;
  const firstDate = DateTime.now().minus({ days: 10 });
  const firstYear = firstDate.year;
  const firstMonth = firstDate.month;
  const firstDay = firstDate.day;
  try {
    const response = await axios.get('https://api.nasa.gov/planetary/apod', {
      params: {
        api_key: process.env.KEY,
        start_date: `${firstYear}-${firstMonth}-${firstDay}`,
        end_date: `${year}-${month}-${day}`,
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
