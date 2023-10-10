import React from 'react'
import styled from 'styled-components';

type HeaderProps = {
    onToggleGuide: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleGuide }) => {
  return (
    <HeaderContainer>
      <Title>Markdown Previewer</Title>
      <Button onClick={onToggleGuide}>Markdown Cheat Sheet</Button>
    </HeaderContainer>
  )
}

export default Header

const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  max-width: 100%;
  background-color: #282c34;
`

const Title = styled.h1`
  color: white;
`

const Button = styled.button`
  background-color: #61dafb;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #5296d5;
  }
`