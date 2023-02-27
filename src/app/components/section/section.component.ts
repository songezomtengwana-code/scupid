import { Component, Input } from '@angular/core';
import { HttpService } from '../../services/http.service';
import { PRODUCT } from '../../models/product/product.model';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { TagsModel } from 'src/app/models/general/tag.model';

class tagModel {
  name!: string;
  status!: boolean;
}

@Component({
  selector: 'cup-section',
  templateUrl: './section.component.html',
  styleUrls: [
    './section.component.scss',
    '../title-tag/title-tag.component.scss',
  ],
})
export class SectionComponent {
  searchValue: any;
  tags: any[] = [
    { name: 'All', status: true },
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
  public herTag: boolean = false;
  public allTag: boolean = true;
  public isCollapsed = true;
  public _prevTag: tagModel = new tagModel();
  public _currentTag: tagModel =
    /**
     * App Constructor
     * @param http
     * @param httpClient
     * @param fb
     */
    new tagModel();

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
   *  @desc parses the search value
   * @returns clean input
   */
  searchValueParser() {
    const searchQuery = this.searchValue.toLowerCase();
    console.log({ searching_for: searchQuery });
    return (this.searchValue = '');
  }

  handleActiveTag(tag: TagsModel) {
    // if (tag.name === 'All') {
    //   this.allTag = false;
    //   this.herTag = true;
    //   console.log({ herTag: this.herTag });
    // } else if (tag.name === 'Her') {
    //   this.herTag = false;
    //   this.allTag = true;
    //   console.log({ allTag: this.allTag });
    // }

    switch (tag.name) {
      case 'All':
        this.tags.forEach((result: tagModel) => {
          if (result.name === 'All') {
            result.status = true;
            console.log({ triggered: result });
          } else {
            result.status = false;
          }
        });
        break;
      case 'Discounts':
        this.tags.forEach((result: tagModel) => {
          if (result.name === 'Discounts') {
            result.status = true;
            console.log({ triggered: result });
          } else {
            result.status = false;
          }
        });
        break;
      case 'Her':
        this.tags.forEach((result: tagModel) => {
          if (result.name === 'Her') {
            result.status = true;
            console.log({ triggered: result });
          } else {
            result.status = false;
          }
        });
        break;
      case 'Him':
        this.tags.forEach((result: tagModel) => {
          if (result.name === 'Him') {
            result.status = true;
            console.log({ triggered: result });
          } else {
            result.status = false;
          }
        });
        break;
      case 'Accessories':
        this.tags.forEach((result: tagModel) => {
          if (result.name === 'Accessories') {
            result.status = true;
            console.log({ triggered: result });
          } else {
            result.status = false;
          }
        });
        break;
      case 'Flowers':
        this.tags.forEach((result: tagModel) => {
          if (result.name === 'Flowers') {
            result.status = true;
            console.log({ triggered: result });
          } else {
            result.status = false;
          }
        });
        break;

      default:
        console.log('ayiSpaan achuz');
        break;
    }

    this.rowTitle = tag.name;
  }
}
