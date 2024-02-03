import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-childpage',
  standalone: true,
  imports: [],
  templateUrl: './childpage.component.html',
  styleUrl: './childpage.component.scss'
})
export class ChildpageComponent {
  @Input() pageName: string = 'childpage';
}
