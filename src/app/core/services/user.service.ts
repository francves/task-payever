import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlAPI: string = 'https://reqres.in/api/users';

  constructor(
    private http: HttpClient
  ) { }

  getUsers(page: number){
    return this.http.get(`${this.urlAPI}?page=${page}`);
  }

  getUserById(id: number){
    return this.http.get(`${this.urlAPI}/${id}`);
  }
}
