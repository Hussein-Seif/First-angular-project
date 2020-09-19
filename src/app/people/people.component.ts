import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

  imgPrefx:string='https://image.tmdb.org/t/p/w500';
  pepol:object[];
  constructor(_MovieService:MovieService) {
   
    _MovieService.getPelple().subscribe(
      (data)=>{
        this.pepol=data.results;
      }
    )
   }
  ngOnInit(): void {
  }

}
