import { Component, OnInit } from '@angular/core';
import { MusicDataService } from 'src/app/music-data.service';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss']
})
export class NewReleasesComponent implements OnInit {

  releases: any = {};
  constructor(private musicDataSvc: MusicDataService) { }

  ngOnInit(): void {
    this.musicDataSvc.getNewReleases().subscribe((data)=>{
      this.releases = data.albums.items;
    })
  } 

}
