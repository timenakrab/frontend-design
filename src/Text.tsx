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
const H3 = styled.h2`
  font-size: 24px;
  line-height: 32px;
  color: #000000;
  font-family: 'Kanit';
`;
const H4 = styled.h2`
  font-size: 20px;
  line-height: 26px;
  color: #000000;
  font-family: 'Kanit';
`;
const H5 = styled.h2`
  font-size: 18px;
  line-height: 24px;
  color: #000000;
  font-family: 'Kanit';
`;
const H6 = styled.h2`
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

interface TextProps {
  children: string;
  h1?: boolean;
  h2?: boolean;
  h3?: boolean;
  h4?: boolean;
  h5?: boolean;
  h6?: boolean;
  p?: boolean;
  span?: boolean;
  customStyles?: React.CSSProperties;
}

const Text = ({ h1, h2, h3, h4, h5, h6, p, span, children, customStyles }: TextProps) => {
  if (h1) {
    return <H1 style={{ ...customStyles }}>{children}</H1>;
  }
  if (h2) {
    return <H2 style={{ ...customStyles }}>{children}</H2>;
  }
  if (h3) {
    return <H3 style={{ ...customStyles }}>{children}</H3>;
  }
  if (h4) {
    return <H4 style={{ ...customStyles }}>{children}</H4>;
  }
  if (h5) {
    return <H5 style={{ ...customStyles }}>{children}</H5>;
  }
  if (h6) {
    return <H6 style={{ ...customStyles }}>{children}</H6>;
  }
  if (p) {
    return <P style={{ ...customStyles }}>{children}</P>;
  }
  if (span) {
    return <Span style={{ ...customStyles }}>{children}</Span>;
  }
  return <P style={{ ...customStyles }}>{children}</P>;
};

Text.defaultProps = {
  h1: false,
  h2: false,
  h3: false,
  h4: false,
  h5: false,
  h6: false,
  p: false,
  span: false,
  customStyles: {},
};

export default Text;
