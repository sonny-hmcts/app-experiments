import { Component, AfterViewChecked, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JourneyComponent } from './journey/journey.component';
import { JourneyBaseComponent } from './journey-base/journey-base.component';
import { PageStateService } from './page-state.service';
import { Finals } from './finals';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, JourneyComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements Finals, AfterViewChecked {
  title = 'app-experiments';

  @ViewChildren(JourneyComponent) journeys!: QueryList<JourneyComponent>;

  constructor(private pageStateService: PageStateService) {
    this.pageStateService.setMainComponent(this);
  }

  next(): void {
    this.pageStateService.next();
  }

  previous(): void {
    this.pageStateService.previous();
  }

  onFinalNext(): void {
    alert('finished');
  }

  onFinalPrevious(): void {
    alert('last previous');
  }

  ngAfterViewChecked(): void {
    // Access the child component after each view check
    this.pageStateService.setJourneyComponent(this.journeys.toArray());
  }
}
