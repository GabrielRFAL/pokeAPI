// home.component.ts
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { PokeApiService } from '../../services/poke-api.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class HomeComponent implements OnInit {

  listaPokemons: any[] = [];
  listaImagensPokemons: any;

  private apiUrlImage = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';


  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.getPokemons();
  }

  getPokemons(): void {
    this.pokeApiService.getPokemon().subscribe(response => {
      this.listaPokemons = response.results.map((pokemon: any, index: number) => ({
        ...pokemon,
        id: index + 1
      }));
      console.warn("Lista de Pokémons => ", this.listaPokemons);
    });
  }

  getPokemonImageUrl(id: number): string {
    return `${this.apiUrlImage}/${id}.png`;
  }
}