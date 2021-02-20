import { Route, Link } from "react-router-dom";
import styled from "styled-components";
import CvsBoard from "./category/cvsboard";
import Sidebox from "../Home/sidebox";
import ChickenBoard from "./category/chickenboard";
import KofoodBoard from "./category/kofoodboard";
import CoffeeBoard from "./category/coffeeboard";
import GimbobBoard from "./category/gimbobboard";
import SubjectNavigation from "./subjecnavi";

const CategoryBlock = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
`;

const Category = ({ inputOpen }) => {
  console.log("cat");
  return (
    <CategoryBlock>
      <SubjectNavigation />
      <Route path="/category/cvs" component={CvsBoard}></Route>
      <Route path="/category/chiken" component={ChickenBoard}></Route>
      <Route path="/category/kofood" component={KofoodBoard}></Route>
      <Route path="/category/coffee" component={CoffeeBoard}></Route>
      <Route path="/category/gimbob" component={GimbobBoard}></Route>
      <Sidebox inputOpen={inputOpen} />
    </CategoryBlock>
  );
};

export default Category;

//🏪☕️🍲🍗🍣
