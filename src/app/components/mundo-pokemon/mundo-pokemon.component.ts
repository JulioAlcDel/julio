import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
@Component({
  selector: 'app-mundo-pokemon',
  templateUrl: './mundo-pokemon.component.html',
  styleUrls: ['./mundo-pokemon.component.css']
})
export class MundoPokemonComponent implements OnInit {

  displayColumns:string[] =['posicion','imagen','nombre'];
  data:any[] =[];
  dataSource = new MatTableDataSource<any>(this.data)
  @ViewChild(MatPaginator, { static: true })
  paginator!: MatPaginator;
  pageSizeOptions: number[] = [50, 100, 150,200,250];
  pageIndex = 1;
  pageSize = 50;
  incremet = 50;
  length= 250;
  @ViewChild(MatSort)
  sort!: MatSort;
 

  constructor(private pokemonService:PokemonService,private router:Router) { }

  ngOnInit(): void {

    this.paginator._intl.itemsPerPageLabel="Numero de Página";
    this.getPokemons();
  
  }

  getPokemons() {
    let pokemonData;
    for (let index = this.pageIndex; index <= this.incremet; index++) {
      this.pokemonService.getPokemon(index).subscribe(
        result => {
          pokemonData = {
            posicion: index,
            imagen: result.sprites.front_default,
            nombre: result.name,
           
          };
          
          this.data.push(pokemonData);
          this.dataSource = new MatTableDataSource<any>(this.data);       
          this.dataSource.paginator = this.paginator;

        },
        err => {
          console.log(err);
        }
      );

    }


  }
  search(event: Event): void {
    let value = (event.target as HTMLInputElement).value;
    this.dataSource.filter = value.trim().toLowerCase();
        if(this.dataSource.paginator){
          this.dataSource.paginator.firstPage();
        }
  }
   clickRow(row: any){
    this.router.navigateByUrl('/pokemon/' + row.posicion)
   }
   pageNavigations(event? : PageEvent){
    // this.pageIndex = Number(event?.pageSize)-50;
    this.incremet = Number(event?.pageSize) ;
    this.data = []
    this.getPokemons();
   
  }


}
