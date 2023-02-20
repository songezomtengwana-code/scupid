import { Component, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { PRODUCT } from '../../models/product/product.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

class tagModel {
  name!: string;
  status!: boolean;
}

@Component({
  selector: 'cup-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss'],
})
export class SectionComponent {
  searchValue: any;
  tags: any[] = [
    { name: 'All', status: false },
    { name: 'Discounts', status: false },
    { name: 'Her', status: false },
    { name: 'Him', status: false },
    { name: 'Accessories', status: false },
    { name: 'Flowers', status: false },
  ];
  rowTitle: string = this.tags[0].name;
  tagFilterCredential: any;
  private readonly base_url: string = 'assets/products.json';
  _products: any;

  /**
   * App Constructor
   * @param http
   * @param httpClient
   * @param fb
   */
  constructor(
    private http: HttpService,
    private httpClient: HttpClient,
    private fb: FormBuilder
  ) {}
  ngOnInit(): void {
    this.getProducts();
  }

  /**
   * @desc http get request to local json file
   */
  getProducts() {
    this.httpClient.get(this.base_url).subscribe((response) => {
      this._products = response;
    });
  }
  get products(): PRODUCT[] {
    return this._products;
  }

  /**
   * @desc filter gift by tag selection
   * @param tag
   */
  async filterByTag(tag: tagModel) {
    this.tagFilterCredential = tag;
    this.tags.forEach((res) => {
      if (res.name == tag.name) {
        res.status = !tag.status;
      }
    });
  }

  /**
   * @desc parses the search value
   * @returns clean input
   */
  searchValueParser() {
    const searchQuery = this.searchValue.toLowerCase();
    console.log({ searching_for: searchQuery });
    return (this.searchValue = '');
  }
}
