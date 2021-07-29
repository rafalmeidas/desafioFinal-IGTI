import React from 'react';
import styled from 'styled-components';
import { useClassificacaoContext } from '../api/contexts/classificacaoContext';
import TableCampeonatoComponent from '../molecules/TableCampeonatoComponent';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 2% auto 0 auto;
`;

export default function CampeonatoComponent() {
  const { classificacao } = useClassificacaoContext();
  return (
    <Container>
      <TableCampeonatoComponent data={classificacao} />
    </Container>
  );
}
