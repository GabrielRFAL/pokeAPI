// pokeAPI.service.ts
import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon?limit=151&offset=0';

  constructor(private http: HttpClient) {}

  getPokemon(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}