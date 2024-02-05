import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CaseFlagState } from '../case-flag-state';

@Component({
  selector: 'app-childpage',
  standalone: true,
  imports: [],
  templateUrl: './childpage.component.html',
  styleUrl: './childpage.component.scss'
})
export class ChildpageComponent {
  @Input() pageName: string = 'childpage';

  @Output() public caseFlagStateEmitter: EventEmitter<CaseFlagState> = new EventEmitter<CaseFlagState>();

  public next(): void {
    this.caseFlagStateEmitter.emit({ status:true })
  }

}
