/* ref: https://www.youtube.com/watch?v=-Rv1dbvM1EY */
import React from 'react';
import styled from 'styled-components';

import CardEffect from '../../src/card/CardEffect';
import CodePreview from '../../src/CodePreview';
import ContainerFlex from '../../src/ContainerFlex';

const Root = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background-color: #08001b;
`;
const WarpCard = styled.div`
  margin: 8px;
`;

const CardHoverEffect = () => {
  return (
    <Root>
      <ContainerFlex flexDirection="row" backgroundColor="transparent">
        <WarpCard>
          <CardEffect
            no="01"
            title="Post Title"
            desc="เช็งเม้งช็อค โครนาเซฟตี้ ติงต๊องโจ๋ เคลียร์เลดี้นิรันดร์"
            link="/"
          />
        </WarpCard>
        <WarpCard>
          <CardEffect
            no="02"
            title="Post Title"
            desc="ไมเกรน โอวัลตินคาสิโนเซลส์แมนพรีเมียมสเตเดียม วโรกาสคาสิโนโค้ชเบิร์น"
            link="https://www.google.com"
          />
        </WarpCard>
        <WarpCard>
          <CardEffect
            no="03"
            title="Post Title"
            desc="แซ็กรีดไถเดชานุภาพบ๊วย รีโมตทีวี โต๋เต๋วอลซ์ซาดิสม์ สปอร์ตซัพพลายเออร์ซิ้ม"
            link="https://www.facebook.com"
          />
        </WarpCard>
      </ContainerFlex>
      <CodePreview
        language="tsx"
        codeString={`
        import CardEffect from '../src/card/CardEffect';
        ...
        <CardEffect
          no="01"
          title="Post Title"
          desc="Description..."
          link="/"
        />
        ...
        `}
      />
    </Root>
  );
};

export default CardHoverEffect;
