import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from "rxjs/operators";
import { share } from 'rxjs/operators';


//Models
import { UserList } from '../models/user-list';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  urlAPI: string = 'https://reqres.in/api/users';

  private observableCacheList: { [key: number]: Observable<UserList> } = {};
  private listCache: { [key: number]: UserList} = {};

  constructor(
    private http: HttpClient
  ) { }

  getUserList(page: number){
    //Data available
    if( this.listCache[page] ) return of(this.listCache[page]);
    //Request pending
    else if (this.observableCacheList[page]) return this.observableCacheList[page];
    //New request needed
    else this.observableCacheList[page] = this.fetchUserList(page);

    return this.observableCacheList[page];
  }

  fetchUserList(page: number){
    return this.http.get(`${this.urlAPI}?page=${page}`)
      .pipe(map(rawData => this.mapCachedUserList(rawData)))
      .pipe(share()); 
  }

  mapCachedUserList(body){
    this.observableCacheList[body.page] = null;
    this.listCache[body.page] = new UserList(body);
    console.log("New request: ", this.listCache[body.page]);
    return this.listCache[body.page]
  }
  
}
