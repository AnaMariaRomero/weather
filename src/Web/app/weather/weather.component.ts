import { Component, OnInit } from '@angular/core';
import { ICurrentWeather } from '../interfaces';
import { WeathersService } from '../weathers.service';


@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {

  current: ICurrentWeather;
  constructor( private service: WeathersService ) {
    this.current = {
      city: 'Buenos Aires',
      country: 'AR',
      date: 4,
      image: 'assets/img/Sol.jpg',
      temperature: 37,
      description: 'Soleado',
   } as ICurrentWeather;
  }

  ngOnInit() {
    this.service.getWeatherActual('Piñeyro','ar').subscribe(data => (this.current=data))
  }

}
