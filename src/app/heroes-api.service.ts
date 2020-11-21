import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HeroesApiService {
  constructor(private _http: HttpClient) {}

  cors_url: String = 'https://cors-anywhere.herokuapp.com/';
  selectedHero: Object = {}; 

  searchHeroName(heroName: String) {
    return this._http.get(
      this.cors_url +
        'https://superheroapi.com/api/2411822022296498/search/' +
        heroName
    );
  }
}

