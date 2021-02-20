import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderBlock = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 50px;
  top: 0px;
  box-sizing: border-box;
  background-color: #ecece9;
  opacity: 0.8;
  position: fixed;

  .header-logo {
    width: 25%;

    a {
      text-decoration: none;
      div {
        font-weight: 500;
        font-size: 30px;
        color: #ff6600;
        text-align: center;
      }
    }
  }

  .header-search {
    display: flex;
    flex-direction: row;
    width: 50%;
    margin: 15px;
    position: relative;

    input {
      border: 1px solid white;
      border-radius: 15px;
      background-color: white;
      margin: 3px;
      padding: 7px;
      width: 100%;
    }
    input:focus {
      outline: none;
    }
    button {
      position: absolute;
      font-size: 13px;
      right: 10px;
      bottom: 5px;
      border: 1px solid white;
      border-radius: 15px;
      background-color: white;
      margin: 2px;
      padding: 2px;
      cursor: pointer;
    }
    button:focus {
      outline: none;
    }
  }

  .header-menu {
    display: flex;
    width: 25%;
    padding: 0px 10px;
    justify-content: space-between;

    div {
      color: black;
      text-align: center;
      font-weight: 400;
      font-size: 20px;
      margin: 0px 20px;
    }
    div:hover {
      cursor: pointer;
    }

    a {
      text-decoration: none;
      div {
        color: black;
        text-align: center;
        font-weight: 400;
        font-size: 20px;
        margin: 0px 20px;
      }
    }
  }
`;
// color: #20c997;

const Header = ({ inputOpen, InputDisplay }) => {
  return (
    <HeaderBlock>
      <div className="header-logo">
        <Link to="/">
          <div>FranFran</div>
        </Link>
      </div>
      <div className="header-search">
        <input type="text" placeholder="찾기" />
        <button type="submit">🔍</button>
      </div>
      <div className="header-menu">
        {inputOpen ? (
          <div className="header-menu__input" onClick={InputDisplay}>
            ➖
          </div>
        ) : (
          <div className="header-menu__input" onClick={InputDisplay}>
            ➕
          </div>
        )}
        <Link to="/profile">
          <div>👤</div>
        </Link>
        <Link to="/message">
          <div>📬</div>
        </Link>
        <Link to="/affiliation">
          <div>🤝</div>
        </Link>
      </div>
    </HeaderBlock>
  );
};

export default Header;
