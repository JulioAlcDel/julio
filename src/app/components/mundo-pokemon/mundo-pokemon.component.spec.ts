import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MundoPokemonComponent } from './mundo-pokemon.component';

describe('MundoPokemonComponent', () => {
  let component: MundoPokemonComponent;
  let fixture: ComponentFixture<MundoPokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MundoPokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MundoPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
