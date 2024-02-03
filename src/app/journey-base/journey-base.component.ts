import { Component, OnInit, OnDestroy } from '@angular/core';
import { Journey } from '../journey';
import { PageStateService } from '../page-state.service';

@Component({
  selector: 'app-journey-base',
  standalone: true,
  imports: [],
  templateUrl: './journey-base.component.html',
  styleUrl: './journey-base.component.scss'
})
export class JourneyBaseComponent implements Journey, OnInit, OnDestroy{

  page: number = 1;
  start: number = 1;
  end: number = 3;

  constructor(private pageStateService: PageStateService) {}

  next(): void {
    if (this.hasNext()){
      this.page++;
    }
  }

  previous(): void {
    if(this.hasPrevious()) {
      this.page--;
    }
  }

  hasNext(): boolean {
    console.log('hasNext', 
    this.page, this.end);
    if(this.page < this.end) {
      return true;
    }else{
      return false;
    }
  }
  hasPrevious(): boolean {
    if(this.page > this.start) {
      return true;
    }
    return false;
  }

  isFinished(): boolean {
    if(this.page === this.end) {
      return true;
    }
    return false;
  }

  isStart(): boolean {
    if(this.page === this.start) {
      return true;
    }
    return false;
  }

  ngOnInit() {
    console.log('JourneyComponent ngOnInit');
  }

  ngOnDestroy() {
    console.log('JourneyComponent ngOnDestroy');
  }

}
