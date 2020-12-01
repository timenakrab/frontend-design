import React from 'react';
import styled from 'styled-components';

import { bgStyles, buttonStyles, ColorProps, ColorTypes, textStyles, unit } from './styleguilde';

interface IQuickAction extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  faClassName: string;
  buttonType?: ColorTypes;
}
interface IBtnQA {
  bgColor: ColorProps;
  disabled?: boolean;
}

const QA = styled.button<IBtnQA>`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.bgColor.secondary};
  min-width: ${unit * 5}px;
  max-width: ${unit * 5}px;
  min-height: ${unit * 5}px;
  max-height: ${unit * 5}px;
  padding: 8px;
  cursor: pointer;
  outline: 0px;
  box-shadow: none;
  border: 1px solid ${(props) => props.bgColor.secondary};
  border-radius: 50%;
  &:hover {
    background-color: ${(props) => props.bgColor.primary};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${(props) => props.bgColor.disable};
  }
  & > i {
    font-size: 16px;
    line-height: 24px;
    color: ${textStyles.white};
  }
`;
const QAD = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${buttonStyles.default.secondary};
  min-width: ${unit * 5}px;
  max-width: ${unit * 5}px;
  min-height: ${unit * 5}px;
  max-height: ${unit * 5}px;
  padding: 8px;
  cursor: pointer;
  outline: 0px;
  box-shadow: none;
  border: 1px solid ${textStyles.superlight};
  border-radius: 50%;
  &:hover {
    background-color: ${buttonStyles.default.primary};
  }
  &:disabled {
    cursor: no-drop;
    background-color: ${buttonStyles.default.disable};
    border: 1px solid ${bgStyles.transparent};
    color: ${textStyles.light};
  }
  & > i {
    font-size: 16px;
    line-height: 24px;
    color: ${textStyles.dark};
  }
`;

const QuickAction = (props: IQuickAction) => {
  const { faClassName, buttonType, disabled } = props;
  if (buttonType === 'default') {
    return (
      <QAD {...props} disabled={disabled}>
        <i className={faClassName} />
      </QAD>
    );
  }
  return (
    <QA {...props} bgColor={buttonStyles[buttonType]} disabled={disabled}>
      <i className={faClassName} />
    </QA>
  );
};

QuickAction.defaultProps = {
  buttonType: 'default',
};

export default QuickAction;
