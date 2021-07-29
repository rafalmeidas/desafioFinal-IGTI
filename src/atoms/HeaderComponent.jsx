import React from 'react';
import styled from 'styled-components';

const Header = styled.header`
  display: flex;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: center;
  background-color: #52b788;
`;

export default function HeaderComponent({ titulo }) {
  return (
    <Header>
      <h1>{titulo}</h1>
    </Header>
  );
}
