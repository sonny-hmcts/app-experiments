import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildpageComponent } from '../childpage/childpage.component';
import { JourneyBaseComponent } from '../journey-base/journey-base.component';
import { CaseFlagState } from '../case-flag-state';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule, ChildpageComponent],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent extends JourneyBaseComponent {
  @Input() pageName: string = 'Journey';

  public onCaseFlagStateEmitted(caseFlagState: CaseFlagState): void {
    if(caseFlagState.status === true){
      this.nextPage();
    }
  }
}
