const express = require('express');
const app = express();
const port = 3000;

const mongoose = require('mongoose');

mongoose
  .connect(
    'mongodb+srv://dblight:asd123@bolierplate.sefdg.mongodb.net/<dbname>?retryWrites=true&w=majority',
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log('MongoDB Conected....'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World!fefefefe'));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
