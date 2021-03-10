import React from "react";
import styled from "styled-components";

const FooterBlock = styled.div`
  .footer-container {
    width: 100%;
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    algin-items: center;
    color: black;
    border-bottom: 1px solid #ecece9;

    .footer-title {
      font-size: 30px;
      margin: 10px;
      text-align: center;
    }

    .footer-middle {
      margin: 10px;
      text-align: center;
      font-size: 15px;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: row;

      div {
        padding: 3px;
      }
    }

    .footer-date {
      margin: 10px;
      text-align: center;
    }
  }
`;

const Footer = () => {
  return (
    <FooterBlock>
      <div className="footer-container">
        <div className="footer-title">FranFran</div>
        <div className="footer-middle">
          <div>Help</div>
          <div>Blog</div>
          <div>Privacy</div>
          <div>Careers</div>
          <div>Terms</div>
          <div>About</div>
        </div>
        <div className="footer-date">©{new Date().getFullYear()}</div>
      </div>
    </FooterBlock>
  );
};

export default Footer;
