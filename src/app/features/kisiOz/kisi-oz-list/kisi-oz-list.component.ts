import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { Person } from '../models/kisiOz.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-kisi-oz-list',
  templateUrl: './kisi-oz-list.component.html',
  styleUrls: ['./kisi-oz-list.component.css']
})
export class KisiOzListComponent implements OnInit {

  kisiOz$?:Observable<Person[]>;

  constructor(private personService:PersonService){

  }
  
  ngOnInit(): void {
  this.kisiOz$=  this.personService.getAllPerson();

  }
}
