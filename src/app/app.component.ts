import { Component, AfterViewChecked, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { JourneyComponent } from './journey/journey.component';
import { JourneyTwoComponent } from './journey-two/journey.component';
import { JourneyBaseComponent } from './journey-base/journey-base.component';
import { Journey } from './journey';
import { PageStateService } from './page-state.service';
import { JourneyInstigator } from './journey-instigator';

// This is the main component that will be used to simulate multiple journey components

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, JourneyComponent, JourneyTwoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements JourneyInstigator, AfterViewChecked {
  title = 'app-experiments';
  minPage = 0;
  page = 0;
  maxPage = 2;

  // This will be used to get all the journey components in the app component
  @ViewChildren('appjourneyitem') journeys!: QueryList<Journey>;

  constructor(private pageStateService: PageStateService) {
    this.pageStateService.setInstigator(this);
  }

  // This method will be triggered by the next button in the app component
  next(): void {
    this.pageStateService.next();
  }

  // This method will be triggered by the previous button in the app component
  previous(): void {
    this.pageStateService.previous();
  }

  // This method will be called by the page state service once a journey component has finished
  onFinalNext(): void {
    if(this.page < this.maxPage){
      alert('Moving on to next journey');
      this.page++;
    }else{
      alert('finished you are at the end of all the journeys');
    }
  }

  // This method will be called by the page state service once a journey is at the beginning of the journey
  onFinalPrevious(): void {
    if(this.page > this.minPage){
      alert('Moving to previous journey');
      this.page--;
    }else{
      alert('You are at the start');
    }
  }

  // This method will be called after each view check and will update the journey collection in the page state service
  ngAfterViewChecked(): void {
    // Access the child component after each view check
    this.pageStateService.setJourneyCollection(this.journeys.toArray());
  }
}
