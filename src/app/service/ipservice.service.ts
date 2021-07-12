import {Injectable} from '@angular/core'
import {observable} from 'rxjs'
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
    providedIn:'root'
})

export class ipservice
{
find:any

    constructor( private http:HttpClient){}

    FindIp(){
debugger

// const httpheaders=new HttpHeaders();
// httpheaders.append('content-type','application/json');
//   let url=`
//   return this.http.get(url,{headers:httpheaders})
//     }

    }
}