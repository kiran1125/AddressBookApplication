import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = "http://localhost:8080/addressbook";


  constructor(private http : HttpClient) { }

  findAll(): Observable<any> {
    return this.http.get(this.baseUrl + "/get");
  }

  createPerson(person: any): Observable<any> {
    return this.http.post(this.baseUrl+"/post", person);
  }

  deletePerson(id:number){
    return this.http.delete(this.baseUrl+"/delete/"+id);
  }

  getPerson(id:any) : Observable<any> {
    return this.http.get(this.baseUrl + "/get/"+id);
  }

  updatePerson(id:any,person:any) : Observable<any> {
    return this.http.put(this.baseUrl + "/put/"+id,person);
  }

  
}
