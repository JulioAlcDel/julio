import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

@Component({
  selector: 'app-mispokemon',
  templateUrl: './mispokemon.component.html',
  styleUrls: ['./mispokemon.component.css']
})
export class MispokemonComponent implements OnInit {
  displayColumns:string[] =['posicion','imagen','nombre'];
  dataMyPokemon:any[] =[];
  pokemonData:any[] = [];
  dataSourceMyPokemon = new MatTableDataSource<any>(this.dataMyPokemon)
  @ViewChild(MatPaginator, { static: true })
  paginatorMyPokemon!: MatPaginator;
  pageSizeOptions: number[] = [50, 100, 150,200,250];
  constructor(private router:Router) { }

  ngOnInit(): void {
    this.fillPokemon()
  }
  fillPokemon(): void {
    this.pokemonData= JSON.parse(localStorage.getItem("pokemon") || "[]")
   this.dataMyPokemon = this.pokemonData.map((item: { id: any; sprites:any; name: string}) => {
    return { posicion : item.id,imagen: item.sprites.front_default,nombre: item.name }
   })
   this.dataSourceMyPokemon = new MatTableDataSource<any>(this.dataMyPokemon);       
   this.dataSourceMyPokemon.paginator = this.paginatorMyPokemon;
  }
  search(event: Event): void {
    let value = (event.target as HTMLInputElement).value;
    this.dataSourceMyPokemon.filter = value.trim().toLowerCase();
        if(this.dataSourceMyPokemon.paginator){
          this.dataSourceMyPokemon.paginator.firstPage();
        }
  }
  home(){
    this.router.navigateByUrl('/home');
   }
}
