import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  baseUrl = environment.baseUrl
  constructor(private http: HttpClient) { }

  getPokemon(): Observable<any>{
    return this.http.get(this.baseUrl)
  }

  getPokemonByName(name: string): Observable<any>{
    return this.http.get(this.baseUrl+"/"+name);
  }
}

