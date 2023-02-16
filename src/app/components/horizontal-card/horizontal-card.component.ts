import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { PRODUCT } from '../../models/product/product.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'cup-horizontal-card',
  templateUrl: './horizontal-card.component.html',
  styleUrls: ['./horizontal-card.component.scss'],
})
export class HorizontalCardComponent implements OnInit {
  @Input() product?:PRODUCT;
  private readonly base_url: string = 'assets/products.json'
  _products: any;
  constructor(private http: HttpService, private httpClient: HttpClient) {}
  ngOnInit(): void {
    console.log({ success: this.products });
    this.getProducts();
  }

  getProducts() {
    // this.http.get('products').subscribe((res) => {
    //   this._products = res;
    // });

    this.httpClient.get(this.base_url).subscribe(response => {
      this._products = response
    })
  }

  get products(): PRODUCT[] {
    return this._products;
  }
}
