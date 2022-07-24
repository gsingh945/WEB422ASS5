import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { AlbumComponent } from './components/album/album.component';
import { ArtistDiscographyComponent } from './components/artist-discography/artist-discography.component';
import { FavouritesComponent } from './components/favourites/favourites.component';
import { NewReleasesComponent } from './components/new-releases/new-releases.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

const routes: Routes = [
  { path: 'newReleases', component: NewReleasesComponent }, // redirect to `first-component`
  { path: 'artist/:id', component: ArtistDiscographyComponent },
  { path: 'album/:id', component: AlbumComponent },
  { path: 'about', component: AboutComponent },
  { path: "search", component: SearchResultComponent },
  { path: "favourites", component: FavouritesComponent },
  { path: '',  redirectTo: '/newReleases', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
