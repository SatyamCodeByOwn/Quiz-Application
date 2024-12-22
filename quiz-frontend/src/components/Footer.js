import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #333;
  color: #fff;
  text-align: center;
  padding: 10px;
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
`;

function Footer() {
  return <FooterContainer>© 2024 QuizApp. All rights reserved.</FooterContainer>;
}

export default Footer;
