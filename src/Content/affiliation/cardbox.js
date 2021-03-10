import styled from "styled-components";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// App > ContentBlock > AffiliationBlock > CardboxBlock

const CardboxBlock = styled.div`
  margin: 50px;
  width: 95%;
  flex-wrap: nowrap;
  border: 1px dotted black;

  .cardbox-title {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 10px;
  }

  .cardbox-wrapper {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    height: auto;
    border: 1px solid black;

    .cardbox-itembox {
      width: 100%;
      display: flex;
      overflow: hidden;
      flex-direction: column;

      .cardbox-item {
        width: 280px;
        height: auto;
        border: 1px solid black;
        border-radius: 5px;

        .img-wrapper {
          position: relative;
          width: 100%;
          text-align: center;
          overflow: hidden;
          padding-bottom: 66.66%;

          img {
            position: absolute;
            top: 0px;
            left: 0px;
            height: 100%;
          }
        }

        .content-wrapper {
          margin: 10px;
          padding: 3px;
          border: 1px dashed black;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          min-height: 176px;

          .name {
            font-size: 25px;
            font-weight: 700;
            line-height: 1;
            margin: 8px 0px;
            border: 1px dashed black;
          }

          .desc {
            font-size: 20px;
            font-weight: 500;
            line-height: 1;
            margin: 8px 0px;
            border: 1px dashed black;
          }

          .status {
            font-size: 15px;
            font-weight: 500;
            line-height: 0.9;
            color: white;
            border: 1px dashed black;
          }
        }
      }
    }
  }
`;

const Cardbox = () => {
  return (
    <CardboxBlock>
      <div className="cardbox-title">제목</div>
      <div className="cardbox-wrapper">
        <div className="cardbox-itembox">
          <div className="cardbox-item">
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1429892494097-cccc61109f58?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            </div>
            <div className="content-wrapper">
              <div>
                <p className="name">제목</p>
                <p className="desc">
                  어느 이상 커지면 상위 박스 크기도 변함. 글자수가 제한되어야
                  함.
                </p>
              </div>
              <p className="status">스케쥴과 상태표시</p>
            </div>
          </div>
        </div>
        <div className="cardbox-itembox">
          <div className="cardbox-item">
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1485186337913-a42c84d7ffcc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1052&q=80" />
            </div>
            <div className="content-wrapper">
              <div>
                <p className="name">제목</p>
                <p className="desc">
                  이미지는 가로형 이미지로 제한됨. 세로형 이미지는 안됨.
                </p>
              </div>
              <p className="status">스케쥴과 상태표시</p>
            </div>
          </div>
        </div>
        <div className="cardbox-itembox">
          <div className="cardbox-item">
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1610327104330-afd2186bc153?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" />
            </div>
            <div className="content-wrapper">
              <div>
                <p className="name">제목</p>
                <p className="desc">설명</p>
              </div>
              <p className="status">스케쥴과 상태표시</p>
            </div>
          </div>
        </div>
        <div className="cardbox-itembox">
          <div className="cardbox-item">
            <div className="img-wrapper">
              <img src="https://images.unsplash.com/photo-1568126689639-8db35b43c932?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
            </div>
            <div className="content-wrapper">
              <div>
                <p className="name">제목</p>
                <p className="desc">설명</p>
              </div>
              <p className="status">스케쥴과 상태표시</p>
            </div>
          </div>
        </div>
      </div>
    </CardboxBlock>
  );
};

export default Cardbox;

// <img src="https://images.unsplash.com/photo-1429892494097-cccc61109f58?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
// <img src="https://images.unsplash.com/photo-1503891450247-ee5f8ec46dc3?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80" />
// <img src="https://images.unsplash.com/photo-1610327104330-afd2186bc153?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80" />
// <img src="https://images.unsplash.com/photo-1568126689639-8db35b43c932?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" />
