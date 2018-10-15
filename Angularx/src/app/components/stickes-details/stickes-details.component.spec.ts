import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StickesDetailsComponent } from './stickes-details.component';

describe('StickesDetailsComponent', () => {
  let component: StickesDetailsComponent;
  let fixture: ComponentFixture<StickesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StickesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StickesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
