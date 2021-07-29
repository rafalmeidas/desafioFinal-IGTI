import { createContext, useContext } from 'react';

export const classificacaoContext = createContext({
  classificacao: {},
});

export function useClassificacaoContext() {
  return useContext(classificacaoContext);
}
