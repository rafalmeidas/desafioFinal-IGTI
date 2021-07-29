import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-shadow: 5px 2px 22px -3px rgba(0, 0, 0, 0.18);
`;

const Table = styled.table`
  width: 100%;
  height: auto;
`;

const THead = styled.thead`
  text-align: center;
  margin: 0;
  background-color: #52b788;
`;

const TBody = styled.tbody``;

const TRHead = styled.tr``;

const TRBody = styled.tr`
  background-color: #eae6e5;
`;

const TH = styled.th`
  text-align: center;
  padding: 2px;
`;

const TD = styled.td`
  text-align: center;
  padding: 2px;
`;

const HEADERS_TABLE = ['Nome', 'P', 'V', 'E', 'D', 'GP', 'GC', 'S'];

export default function TableCampeonatoComponent({ data }) {
  console.log(data);
  return (
    <Container>
      <Table>
        <THead>
          <TRHead>
            {HEADERS_TABLE.map((header, index) => (
              <TH key={index}>{header}</TH>
            ))}
          </TRHead>
        </THead>
        <TBody>
          {data.map((time, index) => (
            <TRBody key={index}>
              <TD>{time.time}</TD>
              <TD>{time.pontos}</TD>
              <TD>{time.vitorias}</TD>
              <TD>{time.empates}</TD>
              <TD>{time.derrotas}</TD>
              <TD>{time.gols_pro}</TD>
              <TD>{time.gols_contra}</TD>
              <TD>{time.saldo_gols}</TD>
            </TRBody>
          ))}
        </TBody>
      </Table>
    </Container>
  );
}
