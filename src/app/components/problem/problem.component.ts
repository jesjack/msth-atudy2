import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import Swal, { SweetAlertOptions } from 'sweetalert2';
import { ProblemService, solveFunction, onSolve } from '../../problem.service';
// Difficulties:
import { faEgg, faDove, faDragon, faRobot, faSquareRootAlt, faMeteor, faInfinity, faQuestion, faExclamation  } from '@fortawesome/free-solid-svg-icons';
// import { SwalComponent } from '@sweetalert2/ngx-sweetalert2';

@Component({
  selector: 'problem',
  templateUrl: './problem.component.html',
  styleUrls: ['./problem.component.sass'],
  providers: [ProblemService]
})
export class ProblemComponent implements OnInit {
  
  @Input() public dificulty: string;
  @Input('problem') public problemTemplate: string; // Template example: '$4 + 5 = {r1}$' o '{r1} + {r2} = 4$'
  @Input('solve') public solveFunction: solveFunction;
  @Input() public correctSwal?: SweetAlertOptions;
  @Input() public incorrectSwal?: SweetAlertOptions;

  @Output() public onCorrect = new EventEmitter<onSolve>();
  @Output() public onIncorrect = new EventEmitter<onSolve>();

  // public defaultCorrectSwal: SweetAlertOptions;
  // public defaultIncorrectSwal: SweetAlertOptions;
  
  constructor(
    private elementRef: ElementRef,
    private problemService: ProblemService
  ) {
    this.dificulty = 'unknown';
    this.problemTemplate = '';
    this.solveFunction = () => true;
    this.responses = [];
    this.problem = '';
    this.icon = faQuestion;
    this.r_length = Array(this.responses.length).fill(0).map((_, i) => i); // Array of numbers from 0 to n-1
  }
  
  ngOnInit(): void {
    
    this.correctSwal = { ...this.problemService.defaultCorrectSwal, ...this.correctSwal };
    this.incorrectSwal = { ...this.problemService.defaultIncorrectSwal, ...this.incorrectSwal };
    this.icon = this.problemService.getIcon(this.dificulty);
    this.onWrite();
    
  }

  public onWrite() {
    // replace {rn} with responses
    this.problem = this.problemTemplate.replace(/\{r(\d+)\}/g, (match, rn) => {
      if (!this.responses[rn]) this.responses[rn] = '';
      this.r_length = Array(this.responses.length).fill(0).map((_, i) => i);
      return this.responses[rn] || '?';
    });
    
  }
  
  public checkResponse() {
    let emitOnSolve: onSolve = {
      problem: this.problem,
      responses: this.responses,
      destroy: () => this.elementRef.nativeElement.remove()
    };

    if (this.solveFunction(this.responses)) {
      this.onCorrect.emit(emitOnSolve);
      Swal.fire(this.correctSwal || this.problemService.defaultCorrectSwal);
    } else {
      this.onIncorrect.emit(emitOnSolve);
      Swal.fire(this.incorrectSwal || this.problemService.defaultIncorrectSwal);
    }
  }
  
  public responses: string[]; // Array of responses
  public problem: string; // Problem with {rn} replaced by responses
  public icon; // Icon for dificulty
  public faPaperPlane = faPaperPlane;
  public r_length: number[];
  public error?: string; // Error message

}