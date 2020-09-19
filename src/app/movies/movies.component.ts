import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  
  imgPrefx:string='https://image.tmdb.org/t/p/w500';
  moviesAll:object[];
  constructor(_MovieService:MovieService) {
   
    _MovieService.getMovies().subscribe(
      (data)=>{
        this.moviesAll=data.results;
      }
    )
   }
  ngOnInit(): void {
  }

}
