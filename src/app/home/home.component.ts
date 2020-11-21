import { Component, OnInit } from '@angular/core';
import { HeroesApiService } from "../heroes-api.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  name: String = '';
  resposta: Object;

  constructor(private apiService: HeroesApiService) { }

  ngOnInit(): void {
  }

  searchHero(){
    this.apiService.searchHeroName(this.name).subscribe(data => {
      this.resposta = data;
      console.log(this.resposta);
      console.log(this.name);
    })
  }

}
