import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const Card = styled.div<{ bgColor: string }>`
  font-family: 'kanit', sans-serif;
  position: relative;
  width: 320px;
  height: 420px;
  background-color: #122936;
  border-radius: 20px;
  overflow: hidden;
  margin: 16px;
  &::before {
    content: '';
    position: absolute;
    top: -50%;
    width: 100%;
    height: 100%;
    background-color: ${(props) => props.bgColor};
    transform: skewY(345deg);
    transition: 0.5s;
  }
  &:hover::before {
    top: -70%;
    transform: skewY(390deg);
  }
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    font-weight: 600;
    font-size: 8em;
    color: rgba(0, 0, 0, 0.1);
  }
`;
const BlockProductImg = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  z-index: 1;
`;
const ProductImg = styled.img`
  max-width: 200px;
  transition: 0.5s;
  ${Card}:hover & {
    max-width: 160px;
  }
`;
const Content = styled.div`
  position: relative;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 1;
`;
const Title = styled.h3`
  margin: 0px;
  font-size: 18px;
  color: #ffffff;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
`;
const Price = styled.h2`
  margin: 0px;
  font-size: 24px;
  color: #ffffff;
  font-weight: 500;
  letter-spacing: 1px;
`;
const Satang = styled.small`
  margin: 0px;
  font-size: 16px;
  color: #ffffff;
  font-weight: 500;
  letter-spacing: 1px;
`;
const BuyNow = styled.a<{ bgColor: string }>`
  position: relative;
  top: 200px;
  opacity: 0;
  padding: 10px 30px;
  margin-top: 15px;
  color: #ffffff;
  text-decoration: none;
  background-color: ${(props) => props.bgColor};
  border-radius: 30px;
  text-transform: uppercase;
  letter-spacing: 1px;
  transition: 0.3s;
  ${Card}:hover & {
    top: 0;
    opacity: 1;
  }
`;

const CardProduct = ({ title, price, satang, color, link }) => {
  return (
    <Card bgColor={color}>
      <BlockProductImg>
        <ProductImg src="/img/skullcandy.png" alt="skullcandy" />
      </BlockProductImg>
      <Content>
        <Title>{title}</Title>
        <Price>
          {`฿${price}`}
          {satang > 0 ? <Satang>{`.${satang}`}</Satang> : null}
        </Price>
        <BuyNow bgColor={color} href={link}>
          Buy Now
        </BuyNow>
      </Content>
    </Card>
  );
};

CardProduct.defaultProps = {
  color: '#8a8a8a',
  link: '/#',
  satang: 0,
};

CardProduct.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  satang: PropTypes.number,
  color: PropTypes.string,
  link: PropTypes.string,
};

export default CardProduct;
