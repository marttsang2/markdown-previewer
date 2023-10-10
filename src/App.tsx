import { useState } from 'react'
import Header from './components/Header';
import MarkdownGuide from './components/MarkdownGuide';
import MarkdownInput from './components/MarkdownInput';
import MarkdownOutput from './components/MarkdownOutput';
import styled from 'styled-components';

function App() {
  const [markdown, setMarkdown] = useState(`# Hello World`);
  const [showGuide, setShowGuide] = useState(false);


  const onToggleGuide = () => {
    setShowGuide(!showGuide);
  }

  return (
    <>
      <Header onToggleGuide={onToggleGuide} />
      {showGuide && <MarkdownGuide />}
      <MarkdownContainer>
        <MarkdownInput value={markdown} onChange={setMarkdown} />
        <MarkdownOutput markdown={markdown} />
      </MarkdownContainer>
    </>
  )
}

export default App

const MarkdownContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: calc(100vh - 100px);
`