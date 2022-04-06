import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-profile-route',
  templateUrl: './profile-route.component.html',
  styleUrls: ['./profile-route.component.sass'],
  providers: [ProfileService]
})
export class ProfileRouteComponent implements OnInit {

  name: string;

  constructor(
    private profileService: ProfileService
  ) {
    this.name = this.profileService.getProfile().getName();
  }

  ngOnInit(): void {
    
  }

}
