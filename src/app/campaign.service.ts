import { Injectable } from '@angular/core';
import { SweetAlertOptions } from 'sweetalert2';
import { onSolve, onSolveFunction, solveFunction } from './problem.service';
import { ProfileService } from './profile.service';
import { mayor } from './problems/mayor';
import { sis_ec } from './problems/sistema_ecuaciones';
import { integral } from './problems/integral';

@Injectable({
  providedIn: 'root'
})
export class CampaignService {
  getProblems(): problem[] {
    return this.problems;
  }

  public welcomeProblem: welcomeProblem;
  public problems: problem[];

  constructor(
    private profileService: ProfileService
  ) {

    this.welcomeProblem = {
      ...mayor(this.profileService.getProfile().getXP()),
      correctSwal: {
        title: '¡Muy bien!',
        text: '¡Has respondido la interrogante correctamente! ¿Ves qué fácil es?',
        confirmButtonText: '¡Asi es!',
        timer: 0,
        showConfirmButton: true,
      },
    };

    let incorrectSwal: SweetAlertOptions = {
      title: '¡Ups!',
      text: '¡Has respondido incorrectamente!',
      confirmButtonText: '¡Vuelve a intentarlo!',
      timer: 0,
      showConfirmButton: true,
    };

    let correctSwal: SweetAlertOptions = {
      title: '¡Muy bien!',
      text: '¡Has respondido la interrogante correctamente! ¿Ves qué fácil es?',
      confirmButtonText: '¡Asi es!',
      timer: 0,
      showConfirmButton: true,
    };

    // Inventar distintos problemas
    this.problems = [];
    this.problems.push({
      ...this.welcomeProblem,
      incorrectSwal,
      correctSwal: {
        ...correctSwal,
        willClose: () => document.location.reload()
      },
      onIncorrect: (evt) => {},
      dificulty: 'easy'
    });
    
    this.problems.push({
      ...sis_ec(this.profileService.getProfile().getXP()),
      correctSwal: {
        ...correctSwal,
        willClose: () => document.location.reload()
      },
      incorrectSwal,
      onIncorrect: (evt) => {}
    });

    this.problems.push({
      ...integral(this.profileService.getProfile().getXP()),
      correctSwal: {
        ...correctSwal,
        willClose: () => document.location.reload()
      },
      incorrectSwal,
      onIncorrect: (evt) => {}
    });

    
  }
}

export interface welcomeProblem {
  html: string;
  problem: string,
  solve: solveFunction,
  correctSwal: SweetAlertOptions,
  onCorrect: onSolveFunction
}

export interface problem {
  html: string;
  problem: string,
  solve: solveFunction,
  correctSwal: SweetAlertOptions,
  incorrectSwal: SweetAlertOptions,
  onCorrect: onSolveFunction,
  onIncorrect: onSolveFunction,
  dificulty: string
}