import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { BehaviorSubject, Observable } from "rxjs";
import { HttpClient } from "@angular/common/http";
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

    getData(){

    }
}
