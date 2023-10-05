import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './core/components/navbar/navbar.component';
import { KisiOzListComponent } from './features/kisiOz/kisi-oz-list/kisi-oz-list.component';
import { AddKisiOzComponent } from './features/kisiOz/add-kisi-oz/add-kisi-oz.component';
import { FormsModule } from '@angular/forms';

import{HttpClientModule} from '@angular/common/http';
import { EditKisiOzComponent } from './features/kisiOz/edit-kisi-oz/edit-kisi-oz.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    KisiOzListComponent,
    AddKisiOzComponent,
    EditKisiOzComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
