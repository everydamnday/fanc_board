import React from "react";
import { Route, Router } from "react-router-dom";
import styled from "styled-components";
import About from "../Header/about";
import Profile from "../Header/profile";
import Affiliation from "../Header/affiliation";
import Category from "../Content/category";
import CvsBoard from "../Content/category/cvsboard";
import Sidebox from "./sidebox";
import SubjectNavigation from "../Content/subjecnavi";

const ContentBlock = styled.div`
  margin: 0px 150px;
  padding-top: 50px;
  overflow: auto;
`;

const CategoryBlock = styled.div`
  display: flex;
  width: 60%;
  flex-direction: column;
`;

const Content = ({ Login, inputOpen }) => {
  console.log("con", inputOpen);
  return (
    <ContentBlock>
      <Route
        exact
        path="/"
        render={() => (
          <CategoryBlock>
            <SubjectNavigation />
            <CvsBoard />
            <Sidebox inputOpen={inputOpen} />
          </CategoryBlock>
        )}
      ></Route>
      <Route path="/profile" render={() => <Profile Login={Login} />} />
      <Route path="/about" component={About} />
      <Route path="/affiliation" component={Affiliation} />
      <Route
        path="/category"
        render={() => <Category inputOpen={inputOpen} />}
      />
    </ContentBlock>
  );
};

export default Content;
