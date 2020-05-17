import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  zoom = 18;
  center: google.maps.LatLngLiteral;
  markers = [];
  options: google.maps.MapOptions = {
    mapTypeId: 'hybrid',
    zoomControl: true,
    scrollwheel: true
  };


  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition(position => {
      this.center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      this.markers.push({
        position: this.center,
        label: {
          color: 'white',
          text: 'Lounès',
        },
        title: 'Lounès',
        options: {
          animation: google.maps.Animation.BOUNCE,
          icon: {
            url: 'assets/bitmoji.png',
            size: new google.maps.Size(100, 100),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(50, 50)
          }
        },
      });
    });
  }

}
