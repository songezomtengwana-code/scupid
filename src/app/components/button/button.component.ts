import { Component, Input } from '@angular/core';

@Component({
  selector: 'cup-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() theme: string = 'base_color';
  @Input() routerLink: string = '';
  @Input() externalLink:string = ''
  @Input() clickEvent: any;
}
