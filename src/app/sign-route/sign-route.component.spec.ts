import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignRouteComponent } from './sign-route.component';

describe('SignRouteComponent', () => {
  let component: SignRouteComponent;
  let fixture: ComponentFixture<SignRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SignRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
