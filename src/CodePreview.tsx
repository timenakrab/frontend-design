import React, { useEffect, useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import styled from 'styled-components';

const SectionCode = styled.div`
  margin-top: 16px;
  margin-bottom: 16px;
`;

interface CodePreviewProps {
  language: string;
  codeString: string;
}

const CodePreview = ({ language, codeString }: CodePreviewProps) => {
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
    return (
      <SectionCode>
        <p>{CodeDisplay}</p>
      </SectionCode>
    );
  }
  return (
    <SectionCode>
      <SyntaxHighlighter language={language} style={style} customStyle={{ margin: 0 }}>
        {CodeDisplay}
      </SyntaxHighlighter>
    </SectionCode>
  );
};

export default CodePreview;
