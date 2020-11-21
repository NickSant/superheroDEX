import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroTinyCardComponent } from './hero-tiny-card.component';

describe('HeroTinyCardComponent', () => {
  let component: HeroTinyCardComponent;
  let fixture: ComponentFixture<HeroTinyCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroTinyCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroTinyCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
