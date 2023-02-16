import { Component, Input } from '@angular/core';

@Component({
  selector: 'cup-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() height: any;
  @Input() title: string = 'please enter title'
}
