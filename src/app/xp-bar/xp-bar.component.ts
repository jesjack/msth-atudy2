import { Component, Input, OnInit } from '@angular/core';
import { ProfileService } from '../profile.service';

@Component({
  selector: 'app-xp-bar',
  templateUrl: './xp-bar.component.html',
  styleUrls: ['./xp-bar.component.sass'],
  providers: [ProfileService]
})
export class XpBarComponent implements OnInit {

  lvl: number;
  progress: number;

  @Input() size = 100;
  
  constructor(
    private profileService: ProfileService
  ) {
    this.lvl = 0;
    this.progress = 0;
    this.updateProgress();
  }

  ngOnInit(): void {
    ProfileService.xpObservable$.subscribe(() => {
      this.updateProgress();
    });
    
  }

  updateProgress(): void {
    let xp_sqrt = Math.sqrt(this.profileService.getProfile().getXP());
    this.lvl = Math.floor(xp_sqrt);
    this.progress = ((xp_sqrt - this.lvl) * 100);
  }

}
