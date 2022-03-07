import { Injectable } from '@angular/core';
import { faDove, faDragon, faEgg, faInfinity, faMeteor, faQuestion, faRobot, faSquareRootAlt, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { SweetAlertOptions } from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ProblemService {

  public defaultCorrectSwal: SweetAlertOptions;
  public defaultIncorrectSwal: SweetAlertOptions;
  public defaultOnCorrect: onSolveFunction;
  private icons: { [key: string]: IconDefinition };

  constructor() {

    let entitySwal: SweetAlertOptions = {
      timer: 1500,
      timerProgressBar: true,
      showConfirmButton: false,
      heightAuto: false,
    }

    this.defaultCorrectSwal = { ...entitySwal, title: '¡Correcto!', icon: 'success' };
    this.defaultIncorrectSwal = { ...entitySwal, title: 'Incorrecto', icon: 'error' };

    this.defaultOnCorrect = (evt) => evt.destroy();

    this.icons = {
      'easy': faEgg,
      'medium': faDove,
      'hard': faDragon,
      'extreme': faRobot,
      'insane': faSquareRootAlt,
      'impossible': faMeteor,
      'infinite': faInfinity,
      'unknown': faQuestion
    };
    
  }
  
  public getIcon(dificulty: string): IconDefinition {
    return this.icons[dificulty] || faQuestion;
  }

}

export interface onSolve {
  problem: string,
  responses: string[],
  destroy: () => void
}

export interface onSolveFunction { (evt: onSolve): void };

export interface solveFunction { (responses: string[]): boolean };