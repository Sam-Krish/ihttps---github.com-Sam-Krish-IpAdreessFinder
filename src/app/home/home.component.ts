import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { DebugElement } from '@angular/core';
import { ipservice } from '../service/ipservice.service';
import { address } from '../models/address';
declare const L:any
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  IpAddress: any
  country:any
  Region:any
  City:any
  isp:any
  pin:any
  lon:any
  lat:any

  constructor( private http:HttpClient,private ip:ipservice) { }

  


  ngOnInit(): void 
     {
  
     }

FindIp()
{
debugger

 let url="http://localhost:3000/ipaddress"

 this.http.post(url,{
  IpAddress: this.IpAddress

}).subscribe((data:any)=>{
debugger
 
  console.log(JSON.stringify(data.address.country_code));

this.country =JSON.stringify(data.address.country_name);
  
this.Region=JSON.stringify(data.address.region_name);
this.City=JSON.stringify(data.address.city_name);
this.isp=JSON.stringify(data.address.isp)
this.pin=JSON.stringify(data.address.zip_code)

this.lat=JSON.parse(data.address.latitude)
this.lon=JSON.parse(data.address.longitude)

var latitude=    this.lat;
var longitude= this.lon;

console.log(latitude);
console.log(longitude)

let mymap = L.map('map').setView([longitude,latitude], 13);

L.tileLayer(`https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}`, {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset:-1 ,
    accessToken: 'pk.eyJ1IjoibWFsYWlzYW15IiwiYSI6ImNrcXZ0ejU4djBodmkydm8xcmt5OHVocmkifQ.P1frRY6eShHoYnuMUhpxhA'
}).addTo(mymap);
// console.log(resadress)

var circle = L.circle([latitude, longitude], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(mymap);

})
}
} 



  


