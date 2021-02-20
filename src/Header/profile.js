import React from "react";
import styled from "styled-components";
import ListItem from "../Content/listitem";

const LoginProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  .login-logo {
    font-size: 40px;
    font-weight: 500;
    color: #ff6600;
  }

  .profile-namespace {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    box-sizing: border-box;
    padding: 10px;
    width: 50%;

    .profile-namespace__pic {
      background-color: #ecece9;
      color: #ff6600;
      width: 70px;
      height: 70px;
      text-align: center;
      font-size: 40px;
      font-weight: 600;
      padding: 50px;
      border-radius: 50%;
    }

    .profile-namespace__name {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 10px;
      padding: 10px;

      .nickname {
        margin-bottom: 10px;
        color: black;
        font-size: 40px;
        font-weight: 700;
      }

      .store {
        font-size: 20px;
        color: grey;
      }
    }
  }

  .profile-selfinfo {
    margin-top: 10px;
    padding: 20px;
    box-sizing: border-box;
    width: 50%;
    display: flex;
    font-size: 20px;
    flex-direction: row;

    div {
      margin-left: 10px;
    }
  }

  .profile-contentbox {
    margin-top: 30px;
    width: 50%;
    display: flex;
    font-size: 20px;
    flex-direction: column;

    .profile-contentbox__header {
      display: flex;
      flex-direction: row;
      margin: 10px;
      position: relative;

      .profile-contentbox__header-text {
        text-align: center;
        width: 50%;
      }

      .profile-contentbox__header-see {
        text-align: center;
        width: 50%;

        &:hover:active + div {
          transform: translateX(100%);
          transition: all 0.3s ease;
        }
      }

      div {
        position: absolute;
        bottom: 15px;
        height: 2px;
        width: 50%;
        background-color: black;
        transform: translateX(0%);
        transition: all 0.3s ease;
      }
    }
  }
`;

const InputContainer = styled.div`
  input {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 1px solid #ecece9;
    border-radius: 15px;
    padding: 10px;
    width: 300px;
    margin: 10px;
  }

  .logininput-button {
    width: 320px;
  }
`;
const PassportContainer = styled.div`
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    border: 1px solid #ecece9;
    border-radius: 15px;
    padding: 10px;
    width: 300px;
    margin: 10px;
  }
  .passportlogin-googlelogin {
    background-color: grey;
    color: white;
    font-weight: 500;
  }
  .passportlogin-kakaologin {
    background-color: yellow;
    color: white;
    font-weight: 500;
  }
  .passportlogin-facebooklogin {
    background-color: blue;
    color: white;
    font-weight: 500;
  }
`;

const Login = ({ Login }) => {
  return (
    <LoginProfileContainer>
      {Login ? (
        <>
          <div className="login-logo">FranFran</div>
          <InputContainer>
            <form action="*" method="POST">
              <input
                className="logininput-email"
                type="email"
                placeholder="이메일 또는 전화번호"
              ></input>
              <input
                className="logininput-password"
                type="password"
                placeholder="비밀번호"
              ></input>
              <input
                className="logininput-button"
                type="submit"
                value="로그인"
              ></input>
            </form>
          </InputContainer>
          <PassportContainer>
            <div className="passportlogin-googlelogin">Google Login</div>
            <div className="passportlogin-kakaologin">Kakao Login</div>
            <div className="passportlogin-facebooklogin">Facebook Login</div>
          </PassportContainer>
        </>
      ) : (
        <>
          <div className="profile-namespace">
            <div className="profile-namespace__pic">HAN</div>
            <div className="profile-namespace__name">
              <div className="nickname">25h_fucker</div>
              <div className="store"> 군포 | 편의점 | 군포중학교점</div>
            </div>
          </div>
          <div className="profile-selfinfo">
            <div>1 팔로잉</div>
            <div>100 팔로워</div>
            <div>30 글</div>
          </div>
          <div className="profile-contentbox">
            <div className="profile-contentbox__header">
              <p className="profile-contentbox__header-text">글</p>
              <p className="profile-contentbox__header-see">조회수</p>
              <div className="profile-contentbox__header-bottomline"></div>
            </div>
            <div className="profile-contentbox__listitem">
              <div>글</div>
            </div>
          </div>
        </>
      )}
    </LoginProfileContainer>
  );
};

export default Login;
