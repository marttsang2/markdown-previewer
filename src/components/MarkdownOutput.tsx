import React from 'react'
import Markdown from 'react-markdown';
import styled from 'styled-components';

type MarkdownOutputProps = {
    markdown: string;
}

const MarkdownOutput: React.FC<MarkdownOutputProps> = ({ markdown }) => {
  return (
    <OutputContainer>
        <Markdown>
            {markdown}
        </Markdown>
    </OutputContainer>
  )
}

export default MarkdownOutput

const OutputContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    background-color: #eeeeee;
    border: 1px solid #dddddd;
    margin: 8px;
    padding: 12px 24px;
    height: 100%;
`