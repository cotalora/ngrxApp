import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CenterLandscapeComponent } from './center-landscape.component';

describe('CenterLandscapeComponent', () => {
  let component: CenterLandscapeComponent;
  let fixture: ComponentFixture<CenterLandscapeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CenterLandscapeComponent]
    });
    fixture = TestBed.createComponent(CenterLandscapeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
