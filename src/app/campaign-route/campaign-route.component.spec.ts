import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CampaignRouteComponent } from './campaign-route.component';

describe('CampaignRouteComponent', () => {
  let component: CampaignRouteComponent;
  let fixture: ComponentFixture<CampaignRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CampaignRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CampaignRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
