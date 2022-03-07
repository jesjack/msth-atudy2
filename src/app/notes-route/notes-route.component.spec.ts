import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotesRouteComponent } from './notes-route.component';

describe('NotesRouteComponent', () => {
  let component: NotesRouteComponent;
  let fixture: ComponentFixture<NotesRouteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotesRouteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotesRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
