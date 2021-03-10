import React, { useState } from "react";
import styled from "styled-components";
import ListComment from "./listcomment";

const ListItemBlock = styled.div`
  display: flex;
  flex-direction: column;
  background-color: white;
  margin: 0px 10px 5px 10px;

  .listitem-title {
    font-size: 25px;
    margin: 10px;
    font-weight: 500;
  }

  .listitem-userinfo {
    font-size: 12px;
    margin: 3px 10px 20px 10px;
  }

  .listitem-text {
    margin: 15px 10px 30px 10px;
    font-size: 17px;
    color: grey;
  }

  .listitem-bottom {
    display: flex;
    width: 100%;
    magin: 15px;
    flex-direction: row;
    border: 0.01px solid #ecece9;
    font-size: 15px;
    color: grey;

    .listitem-bottom-column-left {
      margin: 10px;
      width: 60%;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      font-size: 13px;
      position: relative;

      div {
        margin-left: 15px;
        &:hover {
          cursor: pointer;
        }
      }
    }

    .listitem-bottom-column-right {
      margin: 10px;
      width: 40%;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      font-size: 13px;
      div {
        margin-left: 15px;
      }
    }

    .listitem-cmtbox {
      background-color: white;
    }
  }
`;

const ListItem = ({ list, item }) => {
  const [popup, setPopup] = useState(false);
  return (
    <>
      <ListItemBlock>
        <div className="listitem-title">{list.title}</div>
        <div className="listitem-userinfo">
          {item.brand} | {item.local} | {list.username}
        </div>
        <div className="listitem-text">{list.text}</div>
        <div className="listitem-bottom">
          <div className="listitem-bottom-column-left">
            <div className="listitem-bottom__see">👁‍🗨 • 893</div>
            <div className="listitem-bottom__like">👍 • 20</div>
            <div
              className="listitem-bottom__comment"
              onClick={() => {
                setPopup((popup) => !popup);
              }}
            >
              💬 • 17
            </div>
          </div>
          <div className="listitem-bottom-column-right">
            <div className="listitem-bottom__state">Now</div>
            <div className="listitem-bottom__date">{list.date}</div>
            <div className="listitem-bottom__bookmark">⭐️</div>
          </div>
        </div>
        {popup && (
          <div className="listitem-cmtbox">
            <ListComment />
            <ListComment />
            <ListComment />
          </div>
        )}
      </ListItemBlock>
    </>
  );
};

export default ListItem;
