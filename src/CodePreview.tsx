import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';

const NoStyle = styled.p`
  display: none;
`;
const SectionCode = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
`;

interface CodePreviewProps {
  language: string;
  codeString: string;
  customStyles?: React.CSSProperties;
}

const CodePreview = ({ language, codeString, customStyles }: CodePreviewProps) => {
  const [style, setStyle] = useState(null);

  function trimCode(code: string) {
    return code.replace(/^\s+|\s+$/gm, '');
  }

  useEffect(() => {
    import('react-syntax-highlighter/dist/esm/styles/prism').then((res) => {
      setStyle(res.dracula);
    });
    return () => {};
  }, [codeString]);

  const CodeDisplay = trimCode(codeString);

  if (!style) {
    return <NoStyle>{CodeDisplay}</NoStyle>;
  }
  return (
    <SectionCode style={{ ...customStyles }}>
      <SyntaxHighlighter language={language} style={style} customStyle={{ margin: 0 }}>
        {CodeDisplay}
      </SyntaxHighlighter>
    </SectionCode>
  );
};

CodePreview.defaultProps = {
  customStyles: {},
};

export default CodePreview;
