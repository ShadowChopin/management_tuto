import "./App.css";
import Customer from "./components/Customer";
import React from "react";

const customers = [
  {
    id: 1,
    image: "https://picsum.photos/id/237/200/300",
    name: "홍길동",
    birthday: "961222",
    gender: "남자",
    job: "대학생",
  },
  {
    id: 2,
    image: "https://picsum.photos/seed/picsum/200/300",
    name: "쿨뷰티",
    birthday: "951019",
    gender: "여자",
    job: "대학생",
  },
  {
    id: 3,
    image: "https://picsum.photos/200/300?grayscale",
    name: "갤럭시",
    birthday: "980405",
    gender: "남자",
    job: "대학생",
  },
];

function App() {
  return (
    <div>
      {customers.map((c) => {
        return (
          <Customer
            key={c.id} // map을 이용하여 다수의 데이터를 가져올때는 사용해야함
            id={c.id}
            image={c.image}
            name={c.name}
            birthday={c.birthday}
            gender={c.gender}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
