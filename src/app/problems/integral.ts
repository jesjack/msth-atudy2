import { onSolve } from "../problem.service";
import { ProfileService } from "../profile.service";


let profileService = new ProfileService();

export function integral(xp: number) {

  let numero_de_variables = Math.floor(Math.random() * xp.toString().length) + 1; // el número de variables para la integral

  let a = Math.round((Math.floor(Math.random() * (xp * 2)) - xp)/10 * 100) / 100;
  let b = Math.round((Math.floor(Math.random() * (xp - a)) + a)/10 * 100) / 100;

  let vars: number[][] = []; // ej: [ [3, 4] => "3x^{4}" ]
  for (let i = 0; i < numero_de_variables; i++) {
    let n = Math.floor(Math.random() * xp) + 1;
    let d = (Math.floor(Math.random() * xp / 10) + 1) / 2;
    vars.push([n, d]);
  }

  let dificulty = vars.map(x => x.map(y => y.toString().length).reduce((a, b) => a + b, 0)).map(x => x < 3 ? 'medium' : x < 5 ? 'hard' : x < 7 ? 'extreme' : 'insane')[0];
  
  let problem = `$$\\int_{${a}}^{${b}}` + (vars.length > 1 ? `(` : '');

  for (let i = 0; i < vars.length; i++) {
    // "${vars[i][0]}x^{${vars[i][1]}}"
    problem += `${vars[i][0]}x` + (vars[i][1] != 1 ? `^{${vars[i][1]}}` : '');
    if (i < vars.length - 1) problem += ' + ';
  }

  problem += (vars.length > 1 ? `)` : '') + ` \\, \\mathrm{d}x = {r0}$$`;
  
  return {
    html: 'Encuentra el resultado de la siguiente integral definida:',
    problem,

    solve: (responses: string[]) => {
      // la integral de ax^b es igual a ax^{b+1}/(b+1) si b != -1 y a\ln(|x|) si b == -1
      let a_ = vars.map(x => {
        let _a = x[0];
        let _b = x[1];
        if (_b == -1) {
          return _a * Math.log(Math.abs(a));
        } else {
          return _a * Math.pow(a, _b + 1) / (_b + 1);
        }
      });
      let b_ = vars.map(x => {
        let _a = x[0];
        let _b = x[1];

        if (_b == -1) {
          return _a * Math.log(Math.abs(b));
        } else {
          return _a * Math.pow(b, _b + 1) / (_b + 1);
        }
      });
      // return la suma de b_ menos la suma de a_
      return Math.abs(parseFloat(responses[0]) - (b_.reduce((a, b) => a + b, 0) - a_.reduce((a, b) => a + b, 0))) < 1;
    },

    onCorrect: (evt: onSolve) => {
      // xp basado en el número de variables y el número de dígitos de cada variable
      let xp = vars.map(x => x.map(y => y.toString().length).reduce((a, b) => a + b, 0)).reduce((a, b) => a + b, 0);
      profileService.addXP(xp + evt.responses[0].length);
    },
    dificulty
  }
}