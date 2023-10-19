import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeftLandscapeComponent } from './left-landscape.component';

describe('LeftLandscapeComponent', () => {
  let component: LeftLandscapeComponent;
  let fixture: ComponentFixture<LeftLandscapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeftLandscapeComponent]
    });
    fixture = TestBed.createComponent(LeftLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
