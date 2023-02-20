import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cup-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
  animations: [
    trigger('slideInOut', [
      state(
        'in',
        style({
          transform: 'translate3d(0,0,0)',
        })
      ),
      state(
        'out',
        style({
          // transform: 'translate3d(100%, 0, 0)',
        })
      ),
      transition('in => out', animate('400ms ease-in-out')),
      transition('out => in', animate('400ms ease-in-out')),
    ]),
  ],
})
export class NavComponent implements OnInit {
  menuState: string = 'out';

  ngOnInit(): void {}

  toggleMenu() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }

  handleSideNav() {
    this.menuState = this.menuState === 'out' ? 'in' : 'out';
  }
}
