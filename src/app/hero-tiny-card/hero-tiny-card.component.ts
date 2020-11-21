import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-tiny-card',
  templateUrl: './hero-tiny-card.component.html',
  styleUrls: ['./hero-tiny-card.component.scss']
})
export class HeroTinyCardComponent implements OnInit {

  @Input() infos;

  constructor() { }

  ngOnInit(): void {
  }

}
