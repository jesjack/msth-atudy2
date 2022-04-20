import { onSolve } from "../problem.service";
import { ProfileService } from "../profile.service";

let profileService = new ProfileService();

export function mayor(xp: number) {
  let n1 = Math.floor(Math.random() * xp) + 1;
  let n2 = Math.floor(Math.random() * xp) + 1;
  let n3 = Math.floor(Math.random() * xp) + 1;

  return {
    html: '¿Cuál de los siguientes números es mayor?',
    problem: `De entre los números $${n1}, ${n2}$ y $${n3}$ el mayor es \${r0}$.`,
    solve: (responses: string[]) => parseInt(responses[0]) == Math.max(n1, n2, n3),
    onCorrect: (evt: onSolve) => {
      evt.destroy();
      profileService.addXP(n1.toString().length + n2.toString().length + n3.toString().length);
    }
  };
}