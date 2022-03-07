import { Component } from '@angular/core';
import { onSolve } from './problem.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'msth-atudy';
  test(evt: onSolve) {
    console.log(evt);
    // evt.destroy();
  }
}
