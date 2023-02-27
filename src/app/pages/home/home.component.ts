import { Component } from '@angular/core';
import {
  query,
  stagger,
  transition,
  animate,
  keyframes,
  style,
  trigger,
} from '@angular/animations';
import { HomeAnimations } from 'src/app/animations/home.animation';
import { HttpService } from 'src/app/services/http.service';

class storeModel {
  storeName!: string;
  storeUrl!: string;
  storeImage!: string;
}

class optionModel {
  name!: string;
  link!: string;
  image!: string;
  text!: string;
}

class brandsModel {
  url!: string;
  name!: string;
  src!: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  animations: [HomeAnimations],
})
export class HomeComponent {
  public welcome: string[] = [
    'Random Quotes About Love - I am a developer not a poet .',
    'Random Quotes About Love - I am a developer not a poet .',
    'Random Quotes About Love - I am a developer not a poet .',
    'Random Quotes About Love - I am a developer not a poet .',
    'Random Quotes About Love - I am a developer not a poet .',
    'Random Quotes About Love - I am a developer not a poet .',
  ];

  public options: optionModel[] = [
    {
      name: 'gifts',
      image: 'https://i.ibb.co/1Gz9RVR/gifts-section.png',
      link: 'shop/gifts',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti, impedit debitis aut rerum earum suscipit enim? Eligendi, soluta nulla!',
    },
    {
      name: 'events',
      image:
        'https://i.ibb.co/wg0vPgx/Valentines-Day-Picnic-Decor2-684x1024-removebg-preview.png',
      link: 'shop/events',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti, impedit debitis aut rerum earum suscipit enim? Eligendi, soluta nulla!',
    },
    {
      name: 'accommodation',
      image:
        'https://i.ibb.co/Fs5ZZXd/blossom-hotel-houston-removebg-preview.png',
      link: 'shop/accommodation',
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora corrupti, impedit debitis aut rerum earum suscipit enim? Eligendi, soluta nulla!',
    },
  ];
  public stores: storeModel[] = [
    {
      storeName: 'Takealot',
      storeImage:
        'https://shopfront.takealot.com/16ba6ac848d4ca3616b187ecf2bbec2eeaf9c8bf/static/media/src/images/logo.svg-f6ccb489b85bbddf97d6.svg',
      storeUrl: 'https://takealot.com',
    },
    {
      storeName: 'NetFlorist',
      storeImage:
        'https://edgarsclub.co.za/wp-content/uploads/2022/04/NETFLORIST-LOGO.jpg',
      storeUrl: 'https://netflorist.com',
    },
    {
      storeName: 'shein',
      storeImage:
        'https://upload.wikimedia.org/wikipedia/commons/2/25/Shein-logo.png',
      storeUrl: 'https://shein.com',
    },
    {
      storeName: 'Fruugo',
      storeImage:
        'https://sellinterface.com/img/marketplaces/fruugo/fruugo.png',
      storeUrl: 'https://fruugo.com',
    },
    {
      storeName: 'Romace South Africa',
      storeImage:
        'https://cdn.shopify.com/s/files/1/0699/8786/0777/files/White_Black_Simple_Initial_Logo_2.png?v=1677181708&width=500',
      storeUrl: 'https://romancesouthafrica.com',
    },
  ];

  constructor(private http: HttpService) {}

  get movies() {
    return this.http.movies;
  }
}
