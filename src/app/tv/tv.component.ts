import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TVComponent implements OnInit {

  imgPrefx:string='https://image.tmdb.org/t/p/w500';
  tv:object[];
  constructor(_MovieService:MovieService) {
   
    _MovieService.getPelple().subscribe(
      (data)=>{
        this.tv=data.results;
      }
    )
   }

  ngOnInit(): void {
  }

}
