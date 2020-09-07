/* ref: https://www.youtube.com/watch?v=SVY3Mbq2L_I */
import React from 'react';
import styled from 'styled-components';
import ButtonIconFA from '../src/button/ButtonIconFA';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #f5f5f5;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const ButtonFontAwesome = () => {
  return (
    <Root>
      <Container>
        <ButtonIconFA icon="fa-facebook-f" bgColor="#1877f2" link="https://www.facebook.com" />
        <ButtonIconFA icon="fa-twitter" bgColor="#1da1f2" link="https://twitter.com" />
        <ButtonIconFA icon="fa-instagram" bgColor="#c32aa3" link="https://www.instagram.com" />
        <ButtonIconFA icon="fa-line" bgColor="#00b900" link="https://www.line.me" />
        <ButtonIconFA icon="fa-tiktok" bgColor="#000000" link="https://www.tiktok.com" />
      </Container>
    </Root>
  );
};

export default ButtonFontAwesome;
