import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {Observable} from 'rxjs/observable';
//import {GithubInterface} from "github-interface";
@Injectable()
export class SearchService {

private baseUrl: string = 'https://api.github.com/users/'
  constructor(private _http:Http) {

  }
  getProfile(userName:string){
    let url= this.baseUrl + userName ;
    console.log('going to get :'+url);
    return this._http.get(url)
      .map(res=> res.json());

  }

}
