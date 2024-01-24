// package.json / npm 사용할때?
// "dev": "concurrently --kill-others-on-fail \"npm run server\" \"npm run client\""

//npm run dev

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      id: 1,
      image: "https://picsum.photos/id/237/64/64",
      name: "홍길동",
      birthday: "961222",
      gender: "남자",
      job: "대학생",
    },
    {
      id: 2,
      image: "https://picsum.photos/seed/picsum/64/64",
      name: "쿨뷰티",
      birthday: "951019",
      gender: "여자",
      job: "대학생",
    },
    {
      id: 3,
      image: "https://picsum.photos/64/64?grayscale",
      name: "갤럭시",
      birthday: "980405",
      gender: "남자",
      job: "대학생",
    },
  ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
