import { Injectable } from '@angular/core';
import { SweetAlertOptions } from 'sweetalert2';
import { onSolve, onSolveFunction, solveFunction } from './problem.service';
import { ProfileService } from './profile.service';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {

  public welcomeProblem: welcomeProblem;

  constructor(
    private profileService: ProfileService
  ) {
    let n1 = Math.floor(Math.random() * 100);
    let n2 = Math.floor(Math.random() * 100);
    let n3 = Math.floor(Math.random() * 100);

    this.welcomeProblem = {
      html: '¿Cuál de los siguientes números es mayor?',
      problem: `De entre los números $${n1}, ${n2}$ y $${n3}$ el mayor es \${r0}$.`,
      solve: (responses: string[]) => parseInt(responses[0]) == Math.max(n1, n2, n3),
      correctSwal: {
        title: '¡Muy bien!',
        text: '¡Has respondido la interrogante correctamente! ¿Ves qué fácil es?',
        confirmButtonText: '¡Asi es!',
        timer: 0,
        showConfirmButton: true,
      },
      onCorrect: (evt) => {
        evt.destroy();
        this.profileService.addXP(n1.toString().length + n2.toString().length + n3.toString().length);
      },
    };
  }
}

export interface welcomeProblem {
  html: string;
  problem: string,
  solve: solveFunction,
  correctSwal: SweetAlertOptions,
  onCorrect: onSolveFunction
}