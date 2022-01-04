import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class PokemonService {
   url: string = environment.url;
   pokemonData : any[] = [];

  
  constructor(private httpClient: HttpClient) { }
  getPokemon(index: number)
  {
   return this.httpClient.get<any>(this.url + '/pokemon/'+ index   );
  }
  setPokemon(pokemon: any){
    this.pokemonData.push(pokemon)
    localStorage.setItem("pokemon", JSON.stringify(this.pokemonData));
  }
}
