import { Component, OnInit } from '@angular/core';
import { MusicDataService } from 'src/app/music-data.service';

@Component({
  selector: 'app-favourites',
  templateUrl: './favourites.component.html',
  styleUrls: ['./favourites.component.scss']
})
export class FavouritesComponent implements OnInit {

  favourites: Array<any> = [];

  constructor(private musicDataSvc: MusicDataService) { }

  ngOnInit(): void {
    this.musicDataSvc.getFavourites().subscribe((favs: any)=>{
      this.favourites = favs.tracks;
    });
  }

  removeFromFavourites(id: string) {
    this.musicDataSvc.removeFromFavourites(id).subscribe((favs: any) => {
      this.favourites = favs.tracks;
    });
  }

}
