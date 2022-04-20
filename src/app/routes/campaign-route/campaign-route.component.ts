import { Component, OnInit } from '@angular/core';
import { CampaignService, problem } from 'src/app/campaign.service';

@Component({
  selector: 'app-campaign-route',
  templateUrl: './campaign-route.component.html',
  styleUrls: ['./campaign-route.component.sass'],
  providers: [CampaignService]
})
export class CampaignRouteComponent implements OnInit {

  public problems: problem[] = [];

  constructor(
    private campaignService: CampaignService
  ) { }

  ngOnInit(): void {
    this.problems = this.campaignService.getProblems();
  }

}
