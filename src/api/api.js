//import { axios as axio } from 'axios';
import axios from 'axios';
const api = axios.create({
  baseURL: 'http://localhost:3001',
});

export default function getClassificacaoPorAnoEndpoint() {
  let newArray = [{}];
  return api.get('/2003').then(res => {
    res.data.map(d => {
      let partida = d.partidas;
      for (let p of partida) {
        let index = newArray.findIndex(val => val.visitante === p.visitante);
        //console.log(index);
        if (index > 0) {
          //console.log(p.visitante + ' tem');
        } else {
          newArray.push({ visitante: p.visitante });
          //console.log(p.visitante + ' não tem');
        }
      }
    });
    return newArray;
    console.log(newArray);
  });
}

/**
 partida.map(p => {
        //console.log(p.visitante);
        if (newArray.includes(g => g.visitante === 'Vasco')) {
          console.log('tem');
          newArray.push({ visitante: p.visitante, total_gol: 5 });
        } else {
          console.log('não tem');
          newArray.push({ visitante: p.visitante });
        }
      });
 */
