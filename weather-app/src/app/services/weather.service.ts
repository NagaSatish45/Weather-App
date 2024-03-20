import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {

  constructor(private http: HttpClient) {}

  getWeatherData(lat: number, lon: number, excludeParts: string[]): Observable<any> {
    const exclude = excludeParts.join(',');
    const url = `${environment.baseUrl}/onecall?lat=${lat}&lon=${lon}&exclude=${exclude}&appid=${environment.apiKey}`;
    return this.http.get(url);
  }

  // Add any other weather-related methods here
}
