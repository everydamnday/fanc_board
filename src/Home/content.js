import React from "react";
import { Route, Router } from "react-router-dom";
import styled from "styled-components";
import Talk from "../Header/talk";
import Profile from "../Header/profile";
import Affiliation from "../Header/affiliation";
import Category from "../Content/category";
import CvsBoard from "../Content/category/cvsboard";
import Sidebox from "./sidebox";
import SubjectNavigation from "../Content/subjecnavi";

// App > ContentBlock > CategoryBlock(width100%) > SubjectNavigation / CvsBoard / Sidebox

const ContentBlock = styled.div`
  margin-top: 50px;
  width: 100%;
`;

const CategoryBlock = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: center;
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
            <div>
              <SubjectNavigation />
              <CvsBoard />
            </div>
            <Sidebox inputOpen={inputOpen} />
          </CategoryBlock>
        )}
      ></Route>
      <Route path="/profile" render={() => <Profile Login={Login} />} />
      <Route path="/talk" component={Talk} />
      <Route path="/affiliation" component={Affiliation} />
      <Route
        path="/category"
        render={() => <Category inputOpen={inputOpen} />}
      />
    </ContentBlock>
  );
};

export default Content;
