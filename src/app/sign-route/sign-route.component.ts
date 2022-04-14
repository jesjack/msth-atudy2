import { Component, OnInit } from '@angular/core';
import { onSolve } from '../problem.service';
import { ProfileService } from '../profile.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-route',
  templateUrl: './sign-route.component.html',
  styleUrls: ['./sign-route.component.sass'],
  providers: [ProfileService]
})
export class SignRouteComponent implements OnInit {

  constructor(
    private profileService: ProfileService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  public correct(evt: onSolve) {
    this.profileService.login(evt.responses[0], evt.responses[1]);
    this.router.navigate(['/']);
  }

}
