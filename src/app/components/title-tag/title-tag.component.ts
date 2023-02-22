import { Component, Input, OnInit } from '@angular/core';
import { TagsModel } from 'src/app/models/general/tag.model';

@Component({
  selector: 'cup-title-tag',
  templateUrl: './title-tag.component.html',
  styleUrls: [
    './title-tag.component.scss',
    './../../components/section/section.component.scss',
  ],
})
export class TitleTagComponent implements OnInit {
  ngOnInit(): void {
    console.log(this._selectedTag);
  }
  @Input() tags: TagsModel[] = [];
  @Input() rowTitle = 'tags';
  @Input() title: boolean = false;
  protected searchValue = new String();
  public _selectedTag: string = '';
  public isCollapsed = true;

  handleActiveTag(tag: TagsModel) {
    this.rowTitle = tag.name;
    console.log({ selection_made: tag.name });
  }
}
