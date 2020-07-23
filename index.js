const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const { User } = require('./models/User');

const config = require('./config/key');

//application/x-www-form-urlencoded  이 데이터를 분석해서 들고옴
app.use(bodyParser.urlencoded({ extended: true }));

//application/json json을분석하는것
app.use(bodyParser.json());

const mongoose = require('mongoose');

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('MongoDB Conected....'))
  .catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Hello World! 새해해해해해복고고'));

app.post('/register', (req, res) => {
  //회원가입할떄 필요한 정보들 client에서 가져오면
  //그것들을 데이터베이스에 입력해야함

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({
      success: true,
    });
  }); // 몽고db 메서드
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
