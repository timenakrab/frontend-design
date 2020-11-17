import React from 'react';
import styled from 'styled-components';

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
  width: 30%;
  text-transform: uppercase;
  font-family: 'Kanit';
  font-weight: bold;
  color: #ff9678;
`;
const HeadRequire = styled.div`
  width: 30%;
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
  width: 30%;
  font-family: 'Kanit';
`;
const BodyRequire = styled.div`
  width: 30%;
  font-family: 'Kanit';
`;

interface BodyTable {
  name: string;
  type: string;
  require: boolean;
}

interface TableProps {
  body: BodyTable[];
}

const TableRequirefield = ({ body }: TableProps) => {
  const bodyData = [...body];
  return (
    <div>
      <HeadTable>
        <HeadName>Field</HeadName>
        <HeadType>Type</HeadType>
        <HeadRequire>Require</HeadRequire>
      </HeadTable>
      <div>
        {bodyData.map((data) => (
          <BodyItem key={data.name}>
            <BodyName>{data.name}</BodyName>
            <BodyType>{data.type}</BodyType>
            <BodyRequire>{data.require ? 'require' : 'not require'}</BodyRequire>
          </BodyItem>
        ))}
      </div>
    </div>
  );
};

export default TableRequirefield;
