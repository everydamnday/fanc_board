import React, { useState } from "react";
import  from "./Home_Board";

const Board = () => {
  const [items, setItems] = useState([
    {
      id: 0,
      subject: "편의점",
      brand: "gs25",
      lists: [
        {
          number: 0,
          title: "gs25 test 글",
          name: "저승3자",
          date: "2021-02-08",
        },
        {
          number: 1,
          title: "gs25 test 2",
          name: "저승5자",
          date: "2021-02-08",
        },
      ],
    },
    {
      id: 1,
      subject: "편의점",
      brand: "cu편의점",
      lists: [],
    },
  ]);
  return (
    <>
      {items.map((item) => (
        <HomeBoard key={item.id} item={item} />
      ))}
    </>
  );
};

export default Board;
