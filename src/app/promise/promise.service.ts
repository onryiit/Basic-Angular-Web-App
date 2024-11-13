import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PromiseService implements Resolve<any> {
  weatherChanges:BehaviorSubject<any> = new BehaviorSubject({});

  constructor(private _httpClient: HttpClient) {}

  /**
   * Resolve
   * @param {ActivatedRouteSnapshot} route
   * @param {RouterStateSnapshot} state
   * @returns {Observable<any> | Promise<any> | any}
   */

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {
    return new Promise<void>((resolve, reject) => {
      Promise.all([]).then(() => {
        resolve();
      }, reject);
    });
  }

  getWeather(): Promise<any> {
    return new Promise((resolve, reject) => {
      this._httpClient
        .get(
          "https://api.openweathermap.org/data/2.5/weather?q=Caycuma&units=metric&appid=1f68113afe4304205086d446eb343d6d"
        )
        .subscribe((response: any) => {
          this.weatherChanges.next(response)
          resolve(response);
        }, reject);
    });
  }
}
