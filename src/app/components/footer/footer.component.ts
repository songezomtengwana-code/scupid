import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  public starRate: any;
  public comment: string = ''

  links = [
    {
      icon: 'facebook',
      url: "facebook.com/cupid", 
    },
    {
      icon: 'instagram',
      url: "instagram.com/cupid", 
    },
    {
      icon: 'github',
      url: "github.com/songezomtengwana-code/scupid", 
    }
  ]
}
