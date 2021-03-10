import styled from "styled-components";

const ListCommentBlock = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px;

  .cmtbox-pic {
    border-radius: 50%;
    width: 40px;
    height: 40px;
    text-align: center;
    background-color: grey;
    font-size: 10px;
  }

  .cmtbox-cmt {
    margin-left: 10px;
    padding: 10px;
    border-radius: 25px;
    background-color: #ecece9;

    .cmtbox-cmt-nm {
      font-size: 13px;
      font-weight: 600;
      color: black;
      margin-bottom: 15px;
    }

    .cmtbox-cmt-cmt {
      display: block;
      font-size: 13px;
      font-weight: 500;
      margin-top: 3px;
      padding: 3px;
    }
  }

  .cmtbox-cmt_menu {
    font-size: 12px;
    display: flex;
    flex-direction: row;
    margin: 5px 20px;
    .cmtbox-cmt_menu-like {
      padding: 5px;
      text-decoration: none;
    }

    .cmtbox-cmt_menu-cmt {
      padding: 5px;
      text-decoration: none;
    }
  }
`;

const ListComment = () => {
  return (
    <ListCommentBlock>
      <div className="cmtbox-pic">사진</div>
      <div>
        <div className="cmtbox-cmt">
          <span className="cmtbox-cmt-nm">편의점하지말걸 | 서울 | GS25</span>
          <span className="cmtbox-cmt-cmt">
            그렇다고 뭐가 달라져 너네 가게나 잘해
          </span>
        </div>
        <div className="cmtbox-cmt_menu">
          <div className="cmtbox-cmt_menu-like">
            <a href="#">좋아요</a> • 3
          </div>
          <div className="cmtbox-cmt_menu-cmt">
            <a href="#">댓글달기</a>
          </div>
        </div>
      </div>
    </ListCommentBlock>
  );
};

export default ListComment;
