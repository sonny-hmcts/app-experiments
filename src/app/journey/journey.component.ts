import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildpageComponent } from '../childpage/childpage.component';
import { JourneyBaseComponent } from '../journey-base/journey-base.component';

@Component({
  selector: 'app-journey',
  standalone: true,
  imports: [CommonModule, ChildpageComponent],
  templateUrl: './journey.component.html',
  styleUrl: './journey.component.scss'
})
export class JourneyComponent extends JourneyBaseComponent {
  @Input() pageName: string = 'Journey';
}
