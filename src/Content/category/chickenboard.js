import React, { useState } from "react";
import { CVSdb } from "../../db";
import CategoryOptdrop from "../categoryoption";
import styled from "styled-components";
import ListItem from "../listitem";

const BoardBlock = styled.div`
  width: 100%;
  height: 100%;
  .board-content__listitem {
    padding: 10px 0px;
    background-color: #ecece9;
  }
`;

const BarBlock = styled.div`
  display: flex;
`;

const CategoryTag = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  .board-content__tag {
    margin: 10px 10px;
    padding: 8px;
    font-size: 15px;
    border: 0.5px solid #ecece9;
    border-radius: 15px;
    background-color: #ff6600;
    color: white;
  }
`;

const ChickenBoard = () => {
  // 업종별 db를 가져와서 lists를 넣어줌.
  const [item, setItem] = useState({
    brand: "BBQ치킨",
    local: "서울",
    lists: CVSdb[0].lists,
  });
  const onChange = (selectedOption, action) => {
    setItem({ ...item, [action.name]: selectedOption.value });
    console.log(item);
  };
  const options = [
    { value: "BBQ치킨", label: "BBQ치킨" },
    { value: "교촌치킨", label: "교촌치킨" },
    { value: "또래오래치킨", label: "또래오래치킨" },
  ];
  return (
    <>
      <BarBlock>
        <CategoryTag>
          <div className="board-content__tag"># 치킨</div>
          <div className="board-content__tag"># {item.brand}</div>
          <div className="board-content__tag"># {item.local}</div>
        </CategoryTag>
        <CategoryOptdrop onChange={onChange} options={options} />
      </BarBlock>
      <BoardBlock>
        <div className="board-content__listitem">
          {item.lists.map((list) => (
            <ListItem key={list.id} id={list.id} list={list} item={item} />
          ))}
        </div>
      </BoardBlock>
    </>
  );
};

export default ChickenBoard;

// {items.map((item) => (
//   <BoardItem key={item.id} id={item.id} item={item} />
// ))}
