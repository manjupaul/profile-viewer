import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service'
import 'rxjs/add/operator/catch';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  userName: string;
  profile: any;
  errorMessage : string;
  constructor(private ss:SearchService) {
  }
  ngOnInit() {

    this.ss.getProfile(this.userName)
      .subscribe(data =>this.profile=data,
      error =>this.errorMessage = <any> error )
  }
  // search(){
  //  this.ss.getProfile(this.userName)
   //   .subscribe(data=> this.profile = data, console.log);
   // this.userName = '';
  //}

}
