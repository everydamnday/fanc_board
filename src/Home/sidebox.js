import React from "react";
import styled, { keyframes } from "styled-components";
import Footer from "./footer";

const Slideup = keyframes`
from {
  opacity:0;
}
to {
  opacity:1;
}
`;

const SideboxBlock = styled.div`
  margin: 5px;
  width: 30%;
  min-width: 352px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  overflow: auto;

  @media screen and (max-width: 900px) {
    display: none;
  }

  input:focus {
    outline: none;
  }

  form {
    animation: ${Slideup} 0.3s ease-in;
  }

  .sidebox-input__bottomtab {
    display: flex;
    background-color: white;
    justify-content: flex-end;
    opacity: 0.7;
    margin-bottom: 20px;
    border-bottom: 1px solid #ecece9;

    label {
      background-color: #ff6600;
      color: white;
      font-size: 15px;
      font-weight: 800;
      padding: 8px;
      margin: 3px 0px;
      &:hover {
        cursor: pointer;
      }
    }
    button {
      background-color: #ff6600;
      color: white;
      font-size: 15px;
      font-weight: 800;
      padding: 8px;
      margin: 3px 0px 3px 5px;
      border: 0px solid #ecece9;
      &:hover {
        cursor: pointer;
      }
    }
  }

  .sidebox-column-first {
    border-bottom: 1px solid #ecece9;
    padding: 30px 0px;

    .sidebox-column-first__title {
      margin: 10px;
    }

    .sidebox-column-first__tag {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin: 0px 30px;
      a {
        all: unset;
        text-decoration: none;
      }

      div {
        font-size: 13px;
        padding: 10px;
        margin: 10px 0px;
        background-color: #ecece9;
        border: 1px solid white;
        border-radius: 15px;
      }

      div:hover {
        border: 1px solid orange;
        cursor: pointer;
      }
    }
  }

  .sidebox-column__second {
    border-bottom: 1px solid #ecece9;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-between;
    div {
      margin: 20px;
    }
  }
`;

const TextInput = styled.input.attrs((props) => ({ type: "textarea" }))`
  width: 100%;
  box-sizing: border-box;
  height: 300px;
  background-color: #ecece9;
  opacity: 0.7;
  border: 1px solid white;
`;

const Sidebox = ({ inputOpen }) => {
  console.log(inputOpen);
  return (
    <SideboxBlock>
      <div className="sidebox">
        {inputOpen && (
          <form action="*" method="POST">
            <TextInput type="textarea" placeholder=" 작성하기" name="text" />
            <div className="sidebox-input__bottomtab">
              <label htmlFor="input-file">사진 업로드</label>
              <input
                type="file"
                id="input-file"
                style={{ display: "none" }}
                placeholder="사진 업로드"
                name="img"
                accept="image/*"
                encType="multipart/form-data"
              />
              <button type="submit">Post</button>
            </div>
          </form>
        )}
        <div className="sidebox-column-first">
          <div className="sidebox-column-first__title">인기 태그</div>
          <div className="sidebox-column-first__tag">
            <div>
              <a href="#">아르바이트</a>
            </div>
            <div>
              <a href="#">연말정산</a>
            </div>
            <div>
              <a href="#">진상손님</a>
            </div>
            <div>
              <a href="#">인테리어</a>
            </div>
          </div>
          <div className="sidebox-column-first__tag">
            <div>
              <a href="#">발렌타인데이</a>
            </div>
            <div>
              <a href="#">cctv</a>
            </div>
            <div>
              <a href="#">구글플레이카드</a>
            </div>
          </div>
          <div className="sidebox-column-first__tag">
            <div>
              <a href="#">발주</a>
            </div>
            <div>
              <a href="#">선입선출</a>
            </div>
            <div>
              <a href="#">시재점검</a>
            </div>
            <div>
              <a href="#">FF</a>
            </div>
          </div>
        </div>
        {/* <div className="sidebox-column__second">
          <div>text</div>
          <div>text</div>
          <div>text</div>
        </div> */}
        <Footer />
      </div>
    </SideboxBlock>
  );
};

export default Sidebox;
