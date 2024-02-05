import { Injectable } from '@angular/core';
import { Journey } from './journey';
import { Finals } from './finals';
//import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageStateService {
  private journeysSubject: Journey[] = new Array<Journey>();
  private mainSubject: Finals | null = null;
  private journeyState: Map<string, Journey> = new Map<string, Journey>();

  constructor() { }

  setJourneyComponent(journeyComponent: Journey[]): void {
    this.journeysSubject = journeyComponent;
  }

  getJourneyComponent(): Journey[] {
    return this.journeysSubject;
  }

  setMainComponent(mainSubject: Finals): void {
    this.mainSubject=mainSubject;
  }

  setJourneyState(journey: Journey): void {
    this.journeyState.set(journey.id, journey);
  }

  getJourneyState(journey: Journey): Journey | null {
    return this.journeyState.get(journey.id) || null;
  }

  getMainComponent(): Finals | null {
    return this.mainSubject;
  }

  public next(): void {
    if(this.journeysSubject.length <= 0){
      this.mainSubject?.onFinalNext();
      return;
    }
    const isAnyObjectNotFinished: boolean = this.journeysSubject.some(journey => !journey.isFinished());
    if (!isAnyObjectNotFinished) {
      this.mainSubject?.onFinalNext();
      return;
    }
    for (const journey of this.journeysSubject) {
      if(!journey){
        continue;
      }
      if (!journey?.isFinished()) {
        journey?.next();
        break;
      }
    }
  }

  public previous(): void {
    if(this.journeysSubject.length <= 0){
      this.mainSubject?.onFinalPrevious();
      return;
    }
    const isAnyObjectNotAtStart: boolean = this.journeysSubject.some(journey => !journey.isStart());
    if (!isAnyObjectNotAtStart) {
      this.mainSubject?.onFinalPrevious();
      return;
    }
   for (const journey of this.journeysSubject.slice().reverse()) {
      if(!journey){
        continue;
      }
      if (!journey?.isStart()) {
        journey?.previous();
        break;
      }
    }
  }

}
