import { Component, OnInit, OnDestroy, ViewChild, QueryList, Input } from '@angular/core';
import { Journey } from '../journey';
import { PageStateService } from '../page-state.service';
import { ChildpageComponent } from '../childpage/childpage.component';

@Component({
  selector: 'app-journey-base',
  standalone: true,
  imports: [],
  templateUrl: './journey-base.component.html',
  styleUrl: './journey-base.component.scss'
})
export class JourneyBaseComponent implements Journey, OnInit, OnDestroy{

  public start: number = 1;
  public end: number = 1;
  page: number = 1;
  @Input() id: string = 'journey';

  @ViewChild(ChildpageComponent) child!: ChildpageComponent;

  constructor(
    private pageStateService: PageStateService,
    ) {
    this.page = this.start;
  }

  next(): void {
    if (!this.hasNext()){
      return;
    }
    this.child.next();
  }

  previous(): void {
    if(!this.hasPrevious()) {
      return;
    }
    this.previousPage();
  }

  nextPage(): void {
    if(this.hasNext()) {
      this.page++;
    }
  }

  previousPage(): void {
    if(this.hasPrevious()) {
      this.page--;
    }
  }

  hasNext(): boolean { return this.page < this.end};

  hasPrevious(): boolean {return this.page > this.start};

  isFinished(): boolean {return (this.page === this.end)};

  isStart(): boolean {return this.page === this.start};

  getId(): string {return this.id};

  ngOnInit() {
    //page cannot be lower than start
    this.page = this.start;
    console.log('JourneyComponent ngOnInit');
    //restore state
    const state = this.pageStateService.getJourneyState(this);
    if(state){
      const { page, start, end } = state;
      this.page = page;
      this.start = start;
      this.end = end;
    }
  }

  ngOnDestroy() {
    console.log('JourneyComponent ngOnDestroy');
    //save state
    this.pageStateService.setJourneyState(this);
  }

}
