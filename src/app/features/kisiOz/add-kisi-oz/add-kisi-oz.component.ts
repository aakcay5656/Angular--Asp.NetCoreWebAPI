import { Component, OnDestroy } from '@angular/core';
import { AddPersonRequest } from '../models/add-kisiOz-request.model';
import { PersonService } from '../services/person.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-kisi-oz',
  templateUrl: './add-kisi-oz.component.html',
  styleUrls: ['./add-kisi-oz.component.css']
})
export class AddKisiOzComponent implements OnDestroy {

  model:AddPersonRequest;
  private addPersonSubscription?:Subscription

  constructor(private personService:PersonService,
    private router:Router) {
    this.model = {
      name:'',
      tell:''
    };
  }
  
  onFormSubmit (){
    this.addPersonSubscription= this.personService.addPerson(this.model).subscribe({
      next:(response)=>{
        this.router.navigateByUrl('admin/kisi-oz-list');

      },
      error:(error)=>{

      }
    });
  }
  ngOnDestroy(): void {
    this.addPersonSubscription?.unsubscribe();
  }

}
