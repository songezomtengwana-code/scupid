import { Component, Input } from '@angular/core';
import { moviesModel } from '../../models/movies/movies.model';

@Component({
  selector: 'app-card-movie',
  templateUrl: './card-movie.component.html',
  styleUrls: ['./card-movie.component.scss'],
})
export class CardMovieComponent {
  @Input() movie!: moviesModel;
  favStatus: boolean = false;

  addToFavorites() {
    this.favStatus = !this.favStatus;
  }

  async toggleHover() {
    const hover = document.querySelector('.hover') as HTMLElement;

    if (hover.classList.contains('hover-inactive') === true) {
      hover.classList.remove('hover-inactive');
    } else {
      hover.classList.add('hover-inactive');
    }
  }
}
