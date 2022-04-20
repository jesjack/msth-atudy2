import { onSolve } from "../problem.service";
import { ProfileService } from "../profile.service";

let profileService = new ProfileService();


export function sis_ec(xp: number) {
  let vars = Math.floor(Math.random() * xp.toString().length) + 1; // el número de variables para el sistema de ecuaciones
  let dificulty = ['easy', 'medium', 'hard'][vars - 1];
  let matriz: number[][] = [];

  for (let i = 0; i < vars; i++) {
    matriz.push([]);
    for (let j = 0; j <= vars; j++)
      matriz[i].push(Math.floor(Math.random() * xp) + 1);
  }

  // let n = matriz.map(x => x.map(y => y.toString().length).reduce((a, b) => a + b, 0));
  // let dificulty = n.map(x => x < 3 ? 'easy' : x < 5 ? 'medium' : 'hard')[0];
  
  let problem = '';
  for (let i = 0; i < vars; i++) {
    problem += '$'
    for (let j = 0; j < vars; j++) {
      problem += matriz[i][j] + `x_{${j + 1}}`;
      if (j < vars - 1) problem += ' + ';
    }
    problem += ' = ' + matriz[i][vars] + '$ <br> ';
  }

  for (let i = 0; i < vars; i++)
    problem += `$x_{${i + 1}} = {r${i}}$ <br> `;

  return {
    html: 'Resuelve el siguiente sistema de ecuaciones:',
    problem,
    solve: (responses: string[]) => !matriz.map(ec => {
      let sum = 0;
      for (let i = 0; i < ec.length; i++){
        if (i < vars) sum += ec[i] * responses.map(x => {
          // si x es una fraccion se convierte a numero
          if (x.includes('/')) {
            let [n, d] = x.split('/');
            return parseFloat(n) / parseFloat(d);
          } else {
            return parseFloat(x);
          }
        })[i];
      }
      return Math.abs(sum - ec[vars]) < 1;
    }).includes(false),
    onCorrect: (evt: onSolve) => {
      // xp basado en el número de variables y el número de dígitos de cada variable
      let xp = matriz.map(x => x.map(y => y.toString().length).reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0);
      profileService.addXP(xp);
    },
    dificulty
  }
}