import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildpageComponent } from './childpage.component';

describe('ChildpageComponent', () => {
  let component: ChildpageComponent;
  let fixture: ComponentFixture<ChildpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChildpageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChildpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
