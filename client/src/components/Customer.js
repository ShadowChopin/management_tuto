import React from "react";
import { TableRow, TableCell } from "@mui/material";

function Customer(props) {
  // const { name, birthday, gender, job } = props;

  return (
    <TableRow>
      <TableCell>{props.id}</TableCell>
      <TableCell>
        <img src={props.image} alt="profile" />
      </TableCell>
      <TableCell>{props.name}</TableCell>
      <TableCell>{props.gender}</TableCell>
      <TableCell>{props.birthday}</TableCell>
      <TableCell>{props.job}</TableCell>
    </TableRow>
  );
}

// function CustomerProfile(props) {
//   return (
//     <div>
//       <img src={props.image} alt="profile" />
//       <h2>
//         {props.name}({props.id})
//       </h2>
//     </div>
//   );
// }

// function CustomerInfo(props) {
//   return (
//     <div>
//       <p>{props.birthday}</p>
//       <p>{props.gender}</p>
//       <p>{props.job}</p>
//     </div>
//   );
// }

export default Customer;
