import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonService } from 'src/app/services/pokemon.service';
import { Pokemon } from '../../models/pokemon.model';
import {ThemePalette} from '@angular/material/core';

export interface ChipColor {
  name: any;
  color: ThemePalette;
}

@Component({
  selector: 'app-poke-detail',
  templateUrl: './poke-detail.component.html',
  styleUrls: ['./poke-detail.component.scss']
})
export class PokeDetailComponent implements OnInit {

  selectedPokemon: Pokemon = {
    name: "",
    ability: "",
    hidenAbility: "",
    moves: [],
    evolutions: [],
    image: ""
  };

  availableColors: ChipColor[] = [
    {name: 'Ability: ', color: 'primary'},
    {name: 'Hidden Ability: ', color: 'primary'},
    {name: 'Evolutions: ', color: 'primary'},
    {name: 'Moves: ', color: 'primary'},
  ];

  constructor(private pokemonService: PokemonService, private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => {
      this.getPokemonByName(params["pokemonName"]);
    })

   }

  ngOnInit(): void {
  }

  getPokemonByName(name: string){
    this.pokemonService.getPokemonByName(name).subscribe(res => {
      this.selectedPokemon = res[0]
      this.availableColors[0].name = this.availableColors[0].name + " " + this.selectedPokemon.ability;
      this.availableColors[1].name = this.availableColors[1].name + " " + this.selectedPokemon.hidenAbility;
      this.availableColors[2].name = this.availableColors[2].name + " " + this.selectedPokemon.evolutions;
      this.availableColors[3].name = this.availableColors[3].name + " " + this.selectedPokemon.moves;
    });
  }

}
