import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { KisiOzListComponent } from './features/kisiOz/kisi-oz-list/kisi-oz-list.component';
import { AddKisiOzComponent } from './features/kisiOz/add-kisi-oz/add-kisi-oz.component';
import { EditKisiOzComponent } from './features/kisiOz/edit-kisi-oz/edit-kisi-oz.component';

const routes: Routes = [
  {
    path:'admin/kisi-oz-list',
    component:KisiOzListComponent
  },
  {
    path:'admin/kisi-oz-list/kisi-ekle',
    component:AddKisiOzComponent
  },
  {
    path:'admin/kisi-oz-list/:id',
    component:EditKisiOzComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
