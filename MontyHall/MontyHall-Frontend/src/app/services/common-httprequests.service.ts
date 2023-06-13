import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { MontyHall } from '../models/monty-hall';

@Injectable({
  providedIn: 'root'
})
export class CommonHTTPRequestsService {

  private baseUrl = 'https://localhost:7158/api/MontyHall';

  constructor(public http: HttpClient) { }

  getData(numberOfGames: number, changeTheDoor: boolean): Observable<MontyHall> {
    return this.http.post<MontyHall>(`${this.baseUrl}/result`, {
      numberOfGames: numberOfGames,
      changeTheDoor: changeTheDoor
    })
  }
}