import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
  font-size: 32px;
  line-height: 44px;
  color: #000000;
  font-family: 'Kanit';
`;
const H2 = styled.h2`
  font-size: 28px;
  line-height: 38px;
  color: #000000;
  font-family: 'Kanit';
`;
const H3 = styled.h3`
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  font-family: 'Kanit';
`;
const H4 = styled.h4`
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  font-family: 'Kanit';
`;
const H5 = styled.h5`
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  font-family: 'Kanit';
`;
const H6 = styled.h6`
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  font-family: 'Kanit';
`;
const P = styled.p`
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  font-family: 'Kanit';
`;
const Span = styled.span`
  font-size: 16px;
  line-height: 22px;
  color: #000000;
  font-family: 'Kanit';
`;

interface TextProps
  extends React.HTMLAttributes<HTMLHeadingElement | HTMLParagraphElement | HTMLSpanElement> {
  type?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

const Text = (props: TextProps) => {
  const { type, children } = props;
  switch (type) {
    case 'h1':
      return <H1 {...props}>{children}</H1>;
    case 'h2':
      return <H2 {...props}>{children}</H2>;
    case 'h3':
      return <H3 {...props}>{children}</H3>;
    case 'h4':
      return <H4 {...props}>{children}</H4>;
    case 'h5':
      return <H5 {...props}>{children}</H5>;
    case 'h6':
      return <H6 {...props}>{children}</H6>;
    case 'span':
      return <Span {...props}>{children}</Span>;
    default:
      return <P {...props}>{children}</P>;
  }
};

Text.defaultProps = {
  type: 'p',
};

export default Text;
