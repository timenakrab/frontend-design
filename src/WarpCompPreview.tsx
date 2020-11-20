import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';

import CodePreview from './CodePreview';
import Divider from './Divider';
import TableRequirefield from './TableRequirefield';
import Text from './Text';
import { ChildrenProps } from './type/custom';

interface WarpCopmStyle {
  flexDirection: 'row' | 'column';
}
interface RequireProps {
  name: string;
  type: string;
  require: boolean;
}
interface WarpCompPreviewProps {
  title: string;
  codeLanguage: string;
  codePreview: string;
  requireData: RequireProps[];
  exampleLink: string;
  sourceCodeLink: string;
  flexDirection: 'row' | 'column';
  children: ChildrenProps;
}
const WarpComp = styled.div<WarpCopmStyle>`
  display: flex;
  flex-direction: ${(props) => props.flexDirection};
  flex-wrap: wrap;
  margin: 16px 0px;
  align-items: flex-start;
`;
const SectionCodeColumn = styled.div`
  width: 100%;
`;
const SectionCodeRow = styled.div`
  flex-grow: 1;
  padding: 0px 8px;
  @media (max-width: 768px) {
    padding: 8px 0px;
  }
`;
const SectionLinkExample = styled.div`
  display: flex;
  margin: 16px 0px;
  flex-wrap: wrap;
  @media (max-width: 768px) {
    justify-content: center;
  }
`;
const LinkExample = styled.a`
  font-size: 18px;
  line-height: 24px;
  font-family: 'Kanit';
  color: #ff9678;
  text-transform: uppercase;
  margin: 4px;
  margin-bottom: 8px;
  text-decoration: none;
  background-color: #ffffff;
  border: 1px solid #ff9678;
  border-radius: 8px;
  padding: 4px 8px;
  &:hover {
    background-color: #ff9678;
    color: #ffffff;
  }
`;
const LinkGithub = styled.a`
  font-size: 18px;
  line-height: 24px;
  font-family: 'Kanit';
  color: #41436a;
  text-transform: uppercase;
  margin: 4px;
  margin-bottom: 8px;
  text-decoration: none;
  background-color: #ffffff;
  border: 1px solid #41436a;
  border-radius: 8px;
  padding: 4px 8px;
  &:hover {
    background-color: #41436a;
    color: #ffffff;
  }
`;
const Icon = styled.i`
  margin-right: 8px;
`;
const SOURCE_CODE_LINK = 'https://github.com/timenakrab/frontend-design/blob/master';

const WarpCompPreview = ({
  title,
  codeLanguage,
  codePreview,
  requireData,
  exampleLink,
  sourceCodeLink,
  flexDirection,
  children,
}: WarpCompPreviewProps) => {
  const SectionCode = flexDirection === 'row' ? SectionCodeRow : SectionCodeColumn;
  return (
    <div>
      <Text h2 customStyles={{ textTransform: 'uppercase', letterSpacing: 1 }}>
        {title}
      </Text>
      <WarpComp flexDirection={flexDirection}>
        {children}
        <SectionCode>
          <CodePreview
            language={codeLanguage}
            codeString={codePreview}
            customStyles={{ padding: 0 }}
          />
          <TableRequirefield body={requireData} />
          <SectionLinkExample>
            <Link href={exampleLink}>
              <LinkExample href={exampleLink}>
                <Icon className="fas fa-table" />
                live preview
              </LinkExample>
            </Link>
            <LinkGithub href={SOURCE_CODE_LINK + sourceCodeLink} target="_blank">
              <Icon className="fas fa-code" />
              source code
            </LinkGithub>
          </SectionLinkExample>
        </SectionCode>
      </WarpComp>
      <Divider line="wave" />
    </div>
  );
};

export default WarpCompPreview;
