import { BrowserModule } from '@angular/platform-browser';
import { MapRoutingModule } from './map-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapComponent } from './map.component';

@NgModule({
  declarations: [MapComponent],
  imports: [
    BrowserModule,
    MapRoutingModule,
    CommonModule,
    GoogleMapsModule
  ]
})
export class MapModule { }
