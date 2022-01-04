import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MispokemonComponent } from './components/mispokemon/mispokemon.component';
import { MundoPokemonComponent } from './components/mundo-pokemon/mundo-pokemon.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';

const routes: Routes = [
  {path: 'Inicio',component:MundoPokemonComponent},
  {path: 'pokemon/:id', component: PokemonComponent},
  {path: 'misPokemon',component:MispokemonComponent},
  {path: '', pathMatch: 'full', redirectTo: 'Inicio' },
  {path: '**', pathMatch: 'full', redirectTo: 'Inicio'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
