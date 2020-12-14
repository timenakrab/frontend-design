import React from 'react';
import styled from 'styled-components';

import { badgeStyles, ColorTypes, textStyles, unit } from './styleguilde';

interface IBadge extends React.HTMLAttributes<HTMLSpanElement> {
  outline?: boolean;
  badgeType?: ColorTypes;
  children: string | React.ReactNode;
}
interface BadgeProps {
  bgColor: string;
  borderColor: string;
  textColor: string;
}

const Pill = styled.span<BadgeProps>`
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
  font-family: 'Kanit';
  font-size: 16px;
  line-height: 22px;
  padding: ${unit * 0.5}px ${unit}px;
  border-radius: ${unit * 2}px;
  color: ${(props) => props.textColor};
`;

const Badge: React.FC<IBadge> = (props: IBadge) => {
  const { children, outline, badgeType } = props;
  let textColor = textStyles.dark;
  let bgColor = badgeStyles.default.secondary;
  let borderColor = textStyles.superlight;

  if (outline && badgeType !== 'default') {
    textColor = badgeStyles[badgeType].primary;
    borderColor = badgeStyles[badgeType].primary;
  } else if (badgeType !== 'default') {
    textColor = textStyles.white;
    bgColor = badgeStyles[badgeType].primary;
    borderColor = badgeStyles[badgeType].primary;
  }

  return (
    <Pill {...props} bgColor={bgColor} borderColor={borderColor} textColor={textColor}>
      {children}
    </Pill>
  );
};

Badge.defaultProps = {
  outline: false,
  badgeType: 'default',
};

export default Badge;
