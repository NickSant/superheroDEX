import { Component, OnInit } from '@angular/core';
import { HeroesApiService } from '../heroes-api.service';

@Component({
  selector: 'app-hero-infos',
  templateUrl: './hero-infos.component.html',
  styleUrls: ['./hero-infos.component.scss']
})
export class HeroInfosComponent implements OnInit {

  constructor(private apiService: HeroesApiService) { }

  ngOnInit(): void {
    
  }

  

}
