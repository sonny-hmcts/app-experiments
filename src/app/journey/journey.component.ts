import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildpageComponent } from '../childpage/childpage.component';
import { JourneyBaseComponent } from '../journey-base/journey-base.component';
import { CaseFlagState } from '../case-flag-state';
import { PageStateService } from '../page-state.service';

//this will simulate the write-case-flag-field that has child pages

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule, ChildpageComponent],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent extends JourneyBaseComponent{
  @Input() pageName: string = 'Journey';

  public onCaseFlagStateEmitted(caseFlagState: CaseFlagState): void {
    if(caseFlagState.status === true){
      this.nextPage();
    }
  }

  override ngOnInit() {
    this.start = 0;
    this.end = 2;
    super.ngOnInit();
  }
}
