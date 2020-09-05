/* ref: https://www.youtube.com/watch?v=-Rv1dbvM1EY */
import React from 'react';
import styled from 'styled-components';
import Card from '../src/card-hover-effect-page/CardEffect';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #08001b;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const CardHoverEffect = () => {
  return (
    <Root>
      <Container>
        <Card
          no="01"
          title="Post Title"
          desc="เช็งเม้งช็อค โครนาเซฟตี้ ติงต๊องโจ๋ เคลียร์เลดี้นิรันดร์"
          link="/"
        />
        <Card
          no="02"
          title="Post Title"
          desc="ไมเกรน โอวัลตินคาสิโนเซลส์แมนพรีเมียมสเตเดียม วโรกาสคาสิโนโค้ชเบิร์น"
          link="https://www.google.com"
        />
        <Card
          no="03"
          title="Post Title"
          desc="แซ็กรีดไถเดชานุภาพบ๊วย รีโมตทีวี โต๋เต๋วอลซ์ซาดิสม์ สปอร์ตซัพพลายเออร์ซิ้ม"
          link="https://www.facebook.com"
        />
      </Container>
    </Root>
  );
};

export default CardHoverEffect;
