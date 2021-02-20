import React, { useState } from "react";
import { CVSdb } from "../../db";
import CategoryOptdrop from "../categoryoption";
import styled from "styled-components";
import ListItem from "../listitem";

const BoardBlock = styled.div`
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

const CvsBoard = () => {
  // 업종별 db를 가져와서 lists로 넣어줌.
  const [item, setItem] = useState({
    brand: "GS25",
    local: "서울",
    lists: CVSdb[0].lists,
  });
  const onChange = (selectedOption, action) => {
    setItem({ ...item, [action.name]: selectedOption.value });
    console.log(item);
    // 아이템의 브랜드, 로컬 상태를 변경한다.
    // 브랜드 및 로컬 상태 값으로 db 댓글 값을 필터한다.
    // 필터된 값을 lists 상태로 관리한다.
  };
  const options = [
    { value: "GS25", label: "GS25" },
    { value: "CU", label: "CU" },
    { value: "MINISTOP", label: "MINISTOP" },
    { value: "Emart24", label: "Emart24" },
  ];
  return (
    <>
      <BarBlock>
        <CategoryTag>
          <div className="board-content__tag"># 편의점</div>
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

export default CvsBoard;

// {items.map((item) => (
//   <BoardItem key={item.id} id={item.id} item={item} />
// ))}
