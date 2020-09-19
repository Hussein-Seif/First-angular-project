import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
 

  constructor( public _HttpClient:HttpClient) { }

getMovies():Observable<any>
{
  return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/day?api_key=57cc00685ef3cd6bf9f8f25945f54e77');
}

getPelple():Observable<any>
{
  return this._HttpClient.get('https://api.themoviedb.org/3/trending/peple/day?api_key=57cc00685ef3cd6bf9f8f25945f54e77');
}
getTv():Observable<any>
{
  return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/day?api_key=57cc00685ef3cd6bf9f8f25945f54e77');
}
  
}
