import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemon:any = '';
  pokemonIm = '';
  pokemonType = [];
  constructor(private actRouter: ActivatedRoute,private pokenService:PokemonService, private router: Router) { 
     this.actRouter.params.subscribe(
       params => {
         this.getPokemon(params['id']);
       }
     )

  }

  ngOnInit(): void {
  }
   getPokemon(id:number) {

      this.pokenService.getPokemon(id).subscribe(

        response => {
          this.pokemon = response,
          this.pokemonIm = this.pokemon.sprites.front_default;
          this.pokemonType = response.types[0].type.name;
        },
        err => {
          console.log(err);
        }
      )
   }
   home(){
    this.router.navigateByUrl('/home');
   }
   sentInfo(){
     this.pokenService.setPokemon(this.pokemon);
     this.router.navigateByUrl('/misPokemon');
   }
}
