import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';

@Component({
  selector: 'app-poke-table',
  templateUrl: './poke-table.component.html',
  styleUrls: ['./poke-table.component.scss']
})
export class PokeTableComponent implements OnInit {

  private data: Pokemon[] = [];
  public displayedColumns: string[] = ['name', 'image']
  public dataSource = new MatTableDataSource<Pokemon>(this.data)

  constructor(private pokeService: PokemonService, private router: Router) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokeService.getPokemon().subscribe(res => {
      if(res instanceof Array){
        res.forEach(value => {
          this.data.push(value);
        })
        this.data.forEach( value => {
          this.dataSource = new MatTableDataSource<Pokemon>(this.data)
        })
      }
    })
  }

  getRow(row: any){
    this.router.navigateByUrl(`pokeDetail/${row.name}`)
  }

}
