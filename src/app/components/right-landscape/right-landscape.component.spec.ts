import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightLandscapeComponent } from './right-landscape.component';

describe('RightLandscapeComponent', () => {
  let component: RightLandscapeComponent;
  let fixture: ComponentFixture<RightLandscapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RightLandscapeComponent]
    });
    fixture = TestBed.createComponent(RightLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
