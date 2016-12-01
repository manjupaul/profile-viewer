import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service'
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']

})
export class SearchComponent implements OnInit {

  userName: string;
  profile: any;

  constructor(private ss:SearchService) { }
  ngOnInit() {

  }
  search(){
        this.ss.getProfile(this.userName)
          .subscribe(data=> this.profile = data);

    //this.userName = '';
  }
}



