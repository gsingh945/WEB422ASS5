import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MusicDataService } from 'src/app/music-data.service';

@Component({
  selector: 'app-search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.scss']
})
export class SearchResultComponent implements OnInit {

  results: any;
  searchQuery: string = "";

  constructor(private route: ActivatedRoute, private musicDataSvc: MusicDataService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      let q = params['q'];
      this.searchQuery = q;
      this.musicDataSvc.searchArtists(q).subscribe((data)=>{
        console.log(data);
        this.results = data.artists.items;
        this.results.filter((curValue: any, index: Number, self: any) => self.findIndex((t:any) => t.images.length <= 0));
      });
    });
  }

}
