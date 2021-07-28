//import { axios as axio } from 'axios';
import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export default function getClassificacaoPorAnoEndpoint() {
  return api.get('/2003').then(res => {
    let novoLista = [];

    let m = new Map();
    let temporada = res.data;

    for (let partidas of temporada) {
      let partida = partidas.partidas;
      for (let p of partida) {
        if (m.has(p.mandante)) {
          //No item indexado por prod.nome no array novoLista incrementa o preço registrado com o novo preço.
          novoLista[m.get(p.mandante)].vitorias =
            p.pontuacao_geral_mandante.total_vitorias >
            novoLista[m.get(p.mandante)].vitorias
              ? p.pontuacao_geral_mandante.total_vitorias
              : novoLista[m.get(p.mandante)].vitorias;

          novoLista[m.get(p.mandante)].empates =
            p.pontuacao_geral_mandante.total_empates >
            novoLista[m.get(p.mandante)].empates
              ? p.pontuacao_geral_mandante.total_empates
              : novoLista[m.get(p.mandante)].empates;

          novoLista[m.get(p.mandante)].derrotas =
            p.pontuacao_geral_mandante.total_derrotas >
            novoLista[m.get(p.mandante)].derrotas
              ? p.pontuacao_geral_mandante.total_derrotas
              : novoLista[m.get(p.mandante)].derrotas;

          novoLista[m.get(p.mandante)].pontos =
            p.pontuacao_geral_mandante.total_pontos >
            novoLista[m.get(p.mandante)].pontos
              ? p.pontuacao_geral_mandante.total_pontos
              : novoLista[m.get(p.mandante)].pontos;

          novoLista[m.get(p.mandante)].gols_pro =
            p.pontuacao_geral_mandante.total_gols_marcados >
            novoLista[m.get(p.mandante)].gols_pro
              ? p.pontuacao_geral_mandante.total_gols_marcados
              : novoLista[m.get(p.mandante)].gols_pro;

          novoLista[m.get(p.mandante)].gols_contra =
            p.pontuacao_geral_mandante.total_gols_sofridos >
            novoLista[m.get(p.mandante)].gols_contra
              ? p.pontuacao_geral_mandante.total_gols_sofridos
              : novoLista[m.get(p.mandante)].gols_contra;
        } else {
          //Cria um índice nomeado pelo valor de prod.nome apontando para o mais novo elemento do array novoLista
          m.set(
            p.mandante,
            novoLista.push({
              mandante: p.mandante,
              vitorias: p.pontuacao_geral_mandante.total_vitorias,
              empates: p.pontuacao_geral_mandante.total_empates,
              derrotas: p.pontuacao_geral_mandante.total_derrotas,
              pontos: p.pontuacao_geral_mandante.total_pontos,
              gols_pro: p.pontuacao_geral_mandante.total_gols_marcados,
              gols_contra: p.pontuacao_geral_mandante.total_gols_sofridos,
            }) - 1
          );
        }

        if (m.has(p.visitante)) {
          //No item indexado por prod.nome no array novoLista incrementa o preço registrado com o novo preço.
          novoLista[m.get(p.visitante)].vitorias =
            p.pontuacao_geral_visitante.total_vitorias >
            novoLista[m.get(p.visitante)].vitorias
              ? p.pontuacao_geral_visitante.total_vitorias
              : novoLista[m.get(p.visitante)].vitorias;

          novoLista[m.get(p.visitante)].empates =
            p.pontuacao_geral_visitante.total_empates >
            novoLista[m.get(p.visitante)].empates
              ? p.pontuacao_geral_visitante.total_empates
              : novoLista[m.get(p.visitante)].empates;

          novoLista[m.get(p.visitante)].derrotas =
            p.pontuacao_geral_visitante.total_derrotas >
            novoLista[m.get(p.visitante)].derrotas
              ? p.pontuacao_geral_visitante.total_derrotas
              : novoLista[m.get(p.visitante)].derrotas;

          novoLista[m.get(p.visitante)].pontos =
            p.pontuacao_geral_visitante.total_pontos >
            novoLista[m.get(p.visitante)].pontos
              ? p.pontuacao_geral_visitante.total_pontos
              : novoLista[m.get(p.visitante)].pontos;

          novoLista[m.get(p.visitante)].gols_pro =
            p.pontuacao_geral_visitante.total_gols_marcados >
            novoLista[m.get(p.visitante)].gols_pro
              ? p.pontuacao_geral_visitante.total_gols_marcados
              : novoLista[m.get(p.visitante)].gols_pro;

          novoLista[m.get(p.visitante)].gols_contra =
            p.pontuacao_geral_visitante.total_gols_sofridos >
            novoLista[m.get(p.visitante)].gols_contra
              ? p.pontuacao_geral_visitante.total_gols_sofridos
              : novoLista[m.get(p.visitante)].gols_contra;
        } else {
          //Cria um índice nomeado pelo valor de prod.nome apontando para o mais novo elemento do array novoLista
          m.set(
            p.visitante,
            novoLista.push({
              visitante: p.visitante,
              vitorias: p.pontuacao_geral_visitante.total_vitorias,
              empates: p.pontuacao_geral_visitante.total_empates,
              derrotas: p.pontuacao_geral_visitante.total_derrotas,
              pontos: p.pontuacao_geral_visitante.total_pontos,
              gols_pro: p.pontuacao_geral_visitante.total_gols_marcados,
              gols_contra: p.pontuacao_geral_visitante.total_gols_sofridos,
            }) - 1
          );
        }
      }
    }
    let newArray = [];
    for (let time of novoLista) {
      newArray.push({ ...time, saldo_gols: time.gols_pro - time.gols_contra });
    }
    newArray.sort((a, b) => {
      if (a.pontos < b.pontos) {
        return 1;
      }
      if (a.pontos > b.pontos) {
        return -1;
      }
      return 0;
    });

    return newArray;
  });
}
