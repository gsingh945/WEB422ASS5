import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from 'src/app/music-data.service';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  album: any = {};
  constructor(private snackBar: MatSnackBar, private route: ActivatedRoute, private musicDataSvc: MusicDataService) { }

  ngOnInit(): void {
    this.route.params.subscribe((params)=>{
      let id = params['id'];
      this.musicDataSvc.getAlbumById(id).subscribe((data)=>{
        this.album = data;
      });
    });
  }

  addToFavourites(trackID: string) {
    if(this.musicDataSvc.addToFavourites(trackID)) {
      this.snackBar.open("Adding to Favourites...", "Done", {duration:1500});
    }
  }

}
