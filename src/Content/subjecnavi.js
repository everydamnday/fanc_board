import { Route, Link } from "react-router-dom";
import styled from "styled-components";

const SubjectNavigationBlock = styled.div`
  margin-bottom: 10px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 0.5px solid #ecece9;
  text-align: center;

  a {
    text-decoration: none;
    color: grey;
    font-size: 14px;
  }

  div {
    margin: 15px 30px;
  }
`;

const SubjectNavigation = () => {
  return (
    <SubjectNavigationBlock>
      <div>
        <Link to="/category/cvs">편의점</Link>
      </div>
      <div>
        <Link to="/category/kofood">한식</Link>
      </div>
      <div>
        <Link to="/category/chiken">치킨</Link>
      </div>
      <div>
        <Link to="/category/coffee">커피</Link>
      </div>
      <div>
        <Link to="/category/gimbob">김밥</Link>
      </div>
    </SubjectNavigationBlock>
  );
};

export default SubjectNavigation;
