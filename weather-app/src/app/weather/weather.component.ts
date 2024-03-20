import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  public weatherData: any;
  public imageurl:string="";


  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getWeatherData('Rio de Janeiro'); // Default city
  }
  getIconUrl(iconCode: string): string {
    return "https://openweathermap.org/img/wn/"+iconCode+"@2x.png";
  }
  getWeatherData(city: string) {
    const apiKey = '482944e26d320a80bd5e4f23b3de7d1f';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=482944e26d320a80bd5e4f23b3de7d1f`;
    console.log(apiUrl);
    this.http.get(apiUrl).subscribe((data: any) => {
      this.weatherData = data;
      console.log(this.weatherData);
    });
    
  }
}
