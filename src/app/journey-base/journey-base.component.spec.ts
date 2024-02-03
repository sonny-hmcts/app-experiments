import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JourneyBaseComponent } from './journey-base.component';

describe('JourneyBaseComponent', () => {
  let component: JourneyBaseComponent;
  let fixture: ComponentFixture<JourneyBaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JourneyBaseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JourneyBaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
