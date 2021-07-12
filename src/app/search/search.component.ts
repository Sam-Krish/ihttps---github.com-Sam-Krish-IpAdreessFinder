import { Conditional } from '@angular/compiler';
import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  IpAddress: any;
  bgimage : string = "assets/mapBgsmall1.jpg";

  constructor(private router:Router) { }

  ngOnInit(): void {

  }

FindIp(){
debugger

var IpAddress=this.IpAddress;
console.log(IpAddress)
this.router.navigate(['/home']);


}

}
