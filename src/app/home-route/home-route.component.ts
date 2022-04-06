import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import functionPlot from 'function-plot';
import { CampaignService, welcomeProblem } from '../campaign.service';
import { ProblemService } from '../problem.service';

@Component({
  selector: 'app-home-route',
  templateUrl: './home-route.component.html',
  styleUrls: ['./home-route.component.sass'],
  providers: [CampaignService, ProblemService]
})
export class HomeRouteComponent implements OnInit {
  title?: string;
  welcomeProblem: welcomeProblem;

  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private campaignService: CampaignService,
    private problemService: ProblemService
  ) {
    this.welcomeProblem = this.campaignService.welcomeProblem;
  }

  ngOnInit(): void {
    this.activatedroute.data.subscribe((data) => {
      this.title = data['title'];
    });
    
  }

}
