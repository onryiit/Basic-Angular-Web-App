import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: "any",
})
export class FormService {
    routeParams: any;
    channelList: any[] = [];
    onChannelChanged: BehaviorSubject<any> = new BehaviorSubject({});

    constructor(private httpClient: HttpClient) {}

    /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {}

    getForms(): Observable<any> {
      return this.httpClient.get(`${environment.apiUrl}api/forms`);
    }

    createForm(data: any): Observable<any> {
      return this.httpClient.post(`${environment.apiUrl}api/forms`, data);
    }

    updateForm(id: number, data: any): Observable<any> {
      return this.httpClient.put(`${environment.apiUrl}api/forms/${id}`, data);
    }

    deleteForm(id: number): Observable<any> {
      return this.httpClient.delete(`${environment.apiUrl}api/forms/${id}`);
    }
}
