import { Injectable } from '@angular/core';
import { AddPersonRequest } from '../models/add-kisiOz-request.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Person } from '../models/kisiOz.model';
import { environment } from 'src/environments/environment';
import { UpdatePersonRequest } from '../models/update-person-request.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(private http:HttpClient) { }

  addPerson(model: AddPersonRequest):Observable<void>{
    return this.http.post<void>(`${environment.apiBaseUrl}/api/tellreh`,model);
  }


  getAllPerson():Observable<Person[]>{
    return this.http.get<Person[]>(`${environment.apiBaseUrl}/api/tellreh`);
  }

  getPersonById(id:string):Observable<Person>{
    return this.http.get<Person>(`${environment.apiBaseUrl}/api/tellreh/${id}`);
  }

  updatePerson(id:string, updatePersonRequest:UpdatePersonRequest):Observable<Person>{
      return this.http.put<Person>(`${environment.apiBaseUrl}/api/tellreh/${id}`,updatePersonRequest);
  }
  deletePerson(id:string):Observable<Person>{
    return this.http.delete<Person>(`${environment.apiBaseUrl}/api/tellreh/${id}`);
  }
}
