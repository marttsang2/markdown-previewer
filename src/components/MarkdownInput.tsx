import React from 'react'
import styled from 'styled-components';

type MarkdownInputProps = {
  value: string;
  onChange: (value: string) => void;
}

const MarkdownInput: React.FC<MarkdownInputProps> = ({ value, onChange }) => {
  return (
    <InputContainer>
      <StyledTextArea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoFocus
      />
    </InputContainer>
  )
}

export default MarkdownInput

const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    margin: 8px;
    padding: 12px 24px;
    height: 100%;
`

const StyledTextArea = styled.textarea`
    flex: 1;
    border: none;
    outline: none;
    padding: 12px;
    font-size: 16px;
    resize: none;
    border-radius: 5px;
    font-family: 'Courier New', Courier, monospace;
    padding: 12px 24px;
    height: 100%;
`