import { Component } from '@angular/core';

class companyModel {
  brand!: string;
  quotes!: quotesModel[];
  images!: imageModel[];
}

class quotesModel {
  content!: string[];
  author!: string;
}

class imageModel {
  url!: string;
  title!: string;
}

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent {
  company: companyModel = {
    brand: 'Cupid',
    quotes: [
      {
        content: [
          'TO MY VALENTINE, THE ONLY PERSON I SEND HEART EYE EMOJIS TO.',
          'THIS WILL DEFINITELY BE A KIDS-IN-BED-EARLY KIND OF NIGHT. XOXOXO',
          'THANKS FOR BEING YOU AND FOR BEING MINE.',
        ],
        author: 'the love community',
      },
    ],
    images: [
      {
        url: 'https://www.brides.com/thmb/Yz02eSbPB1Vz7pIQkIj9q00LzLo=/1500x0/filters:no_upscale():max_bytes(200000):strip_icc()/The-History-and-Meaning-of-Valentine-s-Day-Credit-Riska-Getty-mages-d69782c870934f4383afc0c3b84fd8a9.jpg',
        title: 'title too',
      },
      {
        url: 'https://images.immediate.co.uk/production/volatile/sites/3/2023/01/best-valentines-day-ideas-gifts-2023-7380b17.png',
        title: 'title',
      },
    ],
  };

  public activeQuote: any = {};

  constructor() {
    this.getDizzzy();
  }

  getDizzzy() {
    const quote = document.querySelector('.landing-content') as HTMLElement;
    setTimeout(() => {
      this.activeQuote = this.company.quotes[0];
      quote.classList.add('quote-active');
      setTimeout(() => {
        quote.classList.add('quote-active');
        this.activeQuote = this.company.quotes[1];
        setTimeout(() => {
          return this.getDizzzy();
        }, 5);
      }, 5000);
    }, 5000);
  }
}
