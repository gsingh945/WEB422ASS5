import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from 'src/app/music-data.service';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.scss']
})
export class ArtistDiscographyComponent implements OnInit {

  album: any = {};
  artist: any = {};
  background: any = "";
  constructor(private route: ActivatedRoute, private musicDataSvc: MusicDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      let id = params['id'];
      this.musicDataSvc.getArtistById(id).subscribe((data)=>{
        this.artist = data;
        this.musicDataSvc.getAlbumsByArtistId(id).subscribe((data)=>{
          this.album = data.items;
          this.album.filter((curValue: any, index: Number, self: any) => self.findIndex((t:any) => t.name.toUpperCase() ===
          curValue.name.toUpperCase()) === index);
          console.log(this.album);
        });

        this.background = `url(${this.artist.images[0].url}) no-repeat center center`;
      })
    });
  }

}
