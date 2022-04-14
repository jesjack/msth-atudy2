import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CampaignService, welcomeProblem } from '../campaign.service';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-welcome-route',
  templateUrl: './welcome-route.component.html',
  styleUrls: ['./welcome-route.component.sass'],
  providers: [CampaignService, ProfileService]
})
export class WelcomeRouteComponent implements OnInit {
  title?: string;
  welcomeProblem: welcomeProblem;

  constructor(
    private router: Router,
    private campaignService: CampaignService,
    private profileService: ProfileService
  ) {

    this.welcomeProblem = this.campaignService.welcomeProblem;

  }

  ngOnInit(): void {

    if (this.profileService.getProfile().getName() !== 'invitado') {
      this.router.navigate(['/welcome']);
    }
    
  }

}
