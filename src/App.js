import "./App.css";
import Customer from "./components/Customer";
import React from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import { styled } from "@mui/system";

// const StyledPaper = styled(Paper)(({ theme }) => ({
//   root: {
//     width: "100%",
//     marginTop: theme.spacing.unit * 3,
//     overflowX: "auto",
//   },
//   table: {
//     minWidth: 1080,
//   },
// }));

const StyledPaper = styled(Paper)(({ theme }) => ({
  overflowX: "auto",
  marginTop: theme.spacing(3),
}));

const StyledTable = styled(Table)({
  minWidth: 1080,
});

const customers = [
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
];

function App(props) {
  const { classes } = props;
  return (
    <StyledPaper>
      <StyledTable className={classes && classes.root}>
        <Table className={classes && classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
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
          </TableBody>
        </Table>
      </StyledTable>
    </StyledPaper>
  );
}

export default App;
