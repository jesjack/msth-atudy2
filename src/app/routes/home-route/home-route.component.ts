import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CampaignService, welcomeProblem } from '../../campaign.service';
import { ProfileService } from '../../profile.service';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.sass'],
  providers: [CampaignService, ProfileService]
})
export class HomeRouteComponent implements OnInit {
  title?: string;

  constructor(
    private router: Router,
    private campaignService: CampaignService,
    private profileService: ProfileService
  ) {
    
  }

  ngOnInit(): void {

    if (this.profileService.getProfile().getName() === 'invitado') {
      this.router.navigate(['/welcome']);
    }
    
  }

}
