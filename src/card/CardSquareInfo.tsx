import React from 'react';
import styled from 'styled-components';

interface ICardSquare {
  icon: string; // font-awesome className;
  cardSize?: number;
  /* card */
  cardColor?: string;
  iconColor?: string;
  /* card info */
  cardInfoColor?: string;
  iconInfoColor?: string;
  info: string;
  textColor?: string;
}
interface ICardStyle {
  cardSize: number;
  cardColor: string;
}
interface IIconStyle {
  iconSize: number;
  iconColor: string;
}
interface ICardInfoStyle {
  cardSize: number;
  cardInfoColor: string;
}
interface IIconInfoStyle {
  iconSize: number;
  iconInfoColor: string;
}
interface ITextStyle {
  textSize: number;
  textColor: string;
}

const CardSquare = styled.div<ICardStyle>`
  position: relative;
  width: ${(props) => props.cardSize}px;
  height: ${(props) => props.cardSize}px;
  background-color: ${(props) => props.cardColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 2px solid transparent;
  overflow: hidden;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.075);
`;
const IconCard = styled.i<IIconStyle>`
  font-size: ${(props) => Math.round(props.iconSize / 2.5)}px;
  color: ${(props) => props.iconColor};
  transition: 0.5s;
  ${CardSquare}:hover & {
    font-size: 0px;
  }
`;
const CardInfo = styled.div<ICardInfoStyle>`
  position: absolute;
  top: calc(100% - 8px);
  left: 0;
  width: ${(props) => props.cardSize}px;
  height: ${(props) => props.cardSize}px;
  background-color: ${(props) => props.cardInfoColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: 0.3s;
  ${CardSquare}:hover & {
    top: 0px;
  }
`;
const IconInfo = styled.i<IIconInfoStyle>`
  font-size: ${(props) => Math.round(props.iconSize / 3.5)}px;
  color: ${(props) => props.iconInfoColor};
  margin-bottom: 16px;
`;
const Info = styled.p<ITextStyle>`
  padding: 0px 16px;
  margin: 0px;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
  min-height: ${(props) => Math.round((props.textSize / 12) * 1.35 * 4)}px;
  max-height: ${(props) => Math.round((props.textSize / 12) * 1.35 * 4)}px;
  height: auto;
  font-family: 'Kanit';
  font-size: ${(props) => Math.round(props.textSize / 12)}px;
  line-height: ${(props) => Math.round((props.textSize / 12) * 1.4)}px;
  color: ${(props) => props.textColor};
  position: relative;
  overflow: hidden;
`;

const CardSquareInfo = ({
  icon,
  cardSize,
  cardColor,
  iconColor,
  cardInfoColor,
  iconInfoColor,
  info,
  textColor,
}: ICardSquare) => {
  return (
    <CardSquare cardSize={cardSize} cardColor={cardColor}>
      <IconCard className={icon} iconSize={cardSize} iconColor={iconColor} />
      <CardInfo cardSize={cardSize} cardInfoColor={cardInfoColor}>
        <IconInfo className={icon} iconSize={cardSize} iconInfoColor={iconInfoColor} />
        <Info textSize={cardSize} textColor={textColor}>
          {info}
        </Info>
      </CardInfo>
    </CardSquare>
  );
};

CardSquareInfo.defaultProps = {
  cardSize: 160,
  cardColor: '#d0d0d0',
  iconColor: '#ffffff',
  cardInfoColor: '#ffffff',
  iconInfoColor: '#808080',
  textColor: '#000000',
};

export default CardSquareInfo;
