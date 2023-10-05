import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { PersonService } from '../services/person.service';
import { Person } from '../models/kisiOz.model';
import { UpdatePersonRequest } from '../models/update-person-request.model';

@Component({
  selector: 'app-edit-kisi-oz',
  templateUrl: './edit-kisi-oz.component.html',
  styleUrls: ['./edit-kisi-oz.component.css']
})
export class EditKisiOzComponent implements OnInit,OnDestroy{

    id:string | null=null;
    paramsSubscriptions?:Subscription; 
    editPersonSubscriptions?:Subscription; 

    person?:Person;
      constructor(private route:ActivatedRoute,
        private personaService:PersonService,
        private router:Router){

      }
 
      ngOnInit(): void {
        this.paramsSubscriptions =  this.route.paramMap.subscribe({
            next:(params)=>{
              this.id=params.get('id');

              if (this.id) {
                this.personaService.getPersonById(this.id)
                .subscribe({
                  next:(response)=>{
                    this.person=response;

                  }
                });
              }
            }
          });
      }
      onFormSubmit(): void {
        const UpdatePersonRequest:UpdatePersonRequest={
          name:this.person?.name ?? '',
          tell:this.person?.tell ?? ''
        };
        if (this.id){
        this.editPersonSubscriptions= this.personaService.updatePerson(this.id,UpdatePersonRequest).subscribe({
          next:(response)=>{
              this.router.navigateByUrl('/admin/kisi-oz-list')
          }
        });
                    }
      }
      onDelete(): void {
        if (this.id) {
           this.personaService.deletePerson(this.id).subscribe({
            next:(response)=>{
              this.router.navigateByUrl('/admin/kisi-oz-list');
            }
           });
        }
           
      }
      ngOnDestroy(): void {
       this.paramsSubscriptions?.unsubscribe();

       this.editPersonSubscriptions?.unsubscribe();
      }
}
