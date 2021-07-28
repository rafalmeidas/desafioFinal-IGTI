import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

const Table = styled.table`
  width: 100%;
  height: auto;
`;

const THead = styled.thead``;

const TBody = styled.tbody``;

const TRBody = styled.tr``;

const TRHead = styled.tr``;

const TD = styled.td``;

export default function TableComponent(headers, data) {
  return (
    <Container>
      <Table>
        <THead>
          <TRHead></TRHead>
        </THead>
        <TBody>
          <TRBody></TRBody>
        </TBody>
      </Table>
    </Container>
  );
}
