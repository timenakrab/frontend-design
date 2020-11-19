import React from 'react';
import styled from 'styled-components';

import PreviewColor from './PreviewColor';

const HeadTable = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px 0px;
  background-color: #41436a;
  padding: 8px 16px;
`;
const HeadName = styled.div`
  width: 40%;
  text-transform: uppercase;
  font-family: 'Kanit';
  font-weight: bold;
  color: #ff9678;
`;
const HeadType = styled.div`
  width: 20%;
  text-transform: uppercase;
  font-family: 'Kanit';
  font-weight: bold;
  color: #ff9678;
`;
const HeadRequire = styled.div`
  width: 20%;
  text-transform: uppercase;
  font-family: 'Kanit';
  font-weight: bold;
  color: #ff9678;
`;
const HeadRemark = styled.div`
  width: 20%;
  text-transform: uppercase;
  font-family: 'Kanit';
  font-weight: bold;
  color: #ff9678;
`;

const BodyItem = styled.div`
  display: flex;
  flex-direction: row;
  margin: 4px 0px;
  background-color: #ffffff;
  padding: 8px 16px;
  border-bottom: 1px solid #d2d2d2;
`;
const BodyName = styled.div`
  width: 40%;
  font-family: 'Kanit';
  color: #f54768;
`;
const BodyType = styled.div`
  width: 20%;
  font-family: 'Kanit';
`;
const BodyRequire = styled.div`
  width: 20%;
  font-family: 'Kanit';
`;
const BodyRemark = styled.div`
  width: 20%;
  font-family: 'Kanit';
`;

const RemarkValue = styled.span`
  font-family: 'Kanit';
  font-size: 16px;
  line-height: 24px;
`;
const RemarkLink = styled.a`
  font-family: 'Kanit';
  font-size: 16px;
  line-height: 24px;
`;

export interface BodyTableRequire {
  name: string;
  type: string;
  require: boolean;
  remark?: {
    type: 'string' | 'color' | 'url';
    value: string;
  };
}
interface TableRequireProps {
  body: BodyTableRequire[];
}

const TableRequirefield = ({ body }: TableRequireProps) => {
  const bodyData = [...body];
  return (
    <div>
      <HeadTable>
        <HeadName>Field</HeadName>
        <HeadType>Type</HeadType>
        <HeadRequire>Require</HeadRequire>
        <HeadRemark>Remark</HeadRemark>
      </HeadTable>
      <div>
        {bodyData.map((data) => {
          const { name, type, require, remark } = data;
          let remarkComp = null;
          if (remark?.type === 'string') {
            remarkComp = <RemarkValue>{remark?.value}</RemarkValue>;
          } else if (remark?.type === 'color') {
            remarkComp = <PreviewColor color={remark?.value} />;
          } else if (remark?.type === 'url') {
            remarkComp = (
              <RemarkLink href={remark?.value} target="_blank">
                {remark?.value}
              </RemarkLink>
            );
          }
          return (
            <BodyItem key={name}>
              <BodyName>{name}</BodyName>
              <BodyType>{type}</BodyType>
              <BodyRequire>{require ? 'require' : 'not require'}</BodyRequire>
              <BodyRemark>{remarkComp}</BodyRemark>
            </BodyItem>
          );
        })}
      </div>
    </div>
  );
};

export default TableRequirefield;
