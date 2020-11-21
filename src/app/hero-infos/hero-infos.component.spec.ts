import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroInfosComponent } from './hero-infos.component';

describe('HeroInfosComponent', () => {
  let component: HeroInfosComponent;
  let fixture: ComponentFixture<HeroInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
