import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MispokemonComponent } from './mispokemon.component';

describe('MispokemonComponent', () => {
  let component: MispokemonComponent;
  let fixture: ComponentFixture<MispokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MispokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MispokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
