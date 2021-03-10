// import React, { useState, useMemo } from "react";
import Select from "react-select";
import styled from "styled-components";

const CategorizedBarBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  font-size: 13px;
  width: 40%;

  a {
    text-decoration: none;
  }
  .select-brand {
    width: 170px;
  }
  .select-local {
    width: 170px;
  }
`;

const CategoryOptdrop = ({ options, onChange }) => {
  const locals = [
    { value: "서울", label: "서울" },
    { value: "경기", label: "경기" },
  ];
  return (
    <CategorizedBarBlock>
      <Select
        name="brand"
        onChange={onChange}
        options={options}
        defaultValue={options[0]}
        className="select-brand"
      />
      <Select
        name="local"
        onChange={onChange}
        options={locals}
        defaultValue={locals[0]}
        className="select-local"
      />
    </CategorizedBarBlock>
  );
};

export default CategoryOptdrop;

//defaultValue={options[0]} defaultMenuIsOpen

// <div className="category">Select with multiple values</div>
// <Select options={options} defaultValue={options} isMulti />
//
//<label> 브랜드
//         <select name="brand">
//             <option value="gs">GS25</option>
//             <option value="cu">CU</option>
//             <option value="mins">미니스탑</option>
//             <option value="e24">e마트24</option>
//             <option value="others">기타</option>
//         </select>
//     </label>
//     <label> 지역
//         <select name="area">
//             <option value="seoul">서울</option>
//             <option value="gyeonggi">경기</option>
//         </select>
//     </label>
