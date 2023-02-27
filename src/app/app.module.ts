import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClientJsonpModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ShopModule } from './shop/shop.module';
import { AuthModule } from './auth/auth.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShopComponent } from './shop/shop.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { InputComponent } from './components/input/input.component';
import { ButtonComponent } from './components/button/button.component';
import { NavComponent } from './components/nav/nav.component';
import { HeaderComponent } from './components/header/header.component';
import { EventsComponent } from './pages/events/events.component';
import { GiftsComponent } from './pages/gifts/gifts.component';
import { VeticalCardComponent } from './components/vetical-card/vetical-card.component';
import { HorizontalCardComponent } from './components/horizontal-card/horizontal-card.component';
import { SectionComponent } from './components/section/section.component';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatChipsModule } from '@angular/material/chips';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TypingAnimatorModule } from 'angular-typing-animator'
 
import { GiftFilterPipe } from './pipes/gift-filter.pipe';
import { TitleTagComponent } from './components/title-tag/title-tag.component';
import { AccomodationComponent } from './pages/accomodation/accomodation.component';
import { BurgerComponent } from './components/burger/burger.component';
<<<<<<< HEAD
import { MatchComponent } from './components/match/match.component'
=======
import { MoviesComponent } from './pages/movies/movies.component';
import { EntertainmentComponent } from './pages/entertainment/entertainment.component';
import { MovieComponent } from './layout/movie/movie.component';
import { SeriesComponent } from './layout/series/series.component';
import { CardMovieComponent } from './components/card-movie/card-movie.component';
import { LandingComponent } from './components/landing/landing.component';
import { FavoritesComponent } from './components/favorites/favorites.component';
import { HomeComponent } from './pages/home/home.component';
import { OptionCardComponent } from './component/option-card/option-card.component';
import { FooterComponent } from './components/footer/footer.component'
>>>>>>> 4c1000508017eca724f4165bac4cd8c2185f5c18

@NgModule({
  declarations: [
    AppComponent,
    ShopComponent,
    AuthComponent,
    LoginComponent,
    SignupComponent,
    InputComponent,
    ButtonComponent,
    NavComponent,
    HeaderComponent,
    EventsComponent,
    GiftsComponent,
    VeticalCardComponent,
    HorizontalCardComponent,
    SectionComponent,
    // GiftFilterPipe,s
    TitleTagComponent,
    AccomodationComponent,
    BurgerComponent,
<<<<<<< HEAD
    MatchComponent
=======
    MoviesComponent,
    EntertainmentComponent,
    MovieComponent,
    SeriesComponent,
    CardMovieComponent,
    LandingComponent,
    FavoritesComponent,
    HomeComponent,
    OptionCardComponent,
    FooterComponent
>>>>>>> 4c1000508017eca724f4165bac4cd8c2185f5c18
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // ShopModule,
    // AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    FormsModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatChipsModule,
    NgbModule,
    TypingAnimatorModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
