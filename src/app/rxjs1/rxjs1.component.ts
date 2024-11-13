import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, combineLatest, fromEvent, merge } from 'rxjs';
import { of } from 'rxjs';
import {
  catchError,
  filter,
  map,
  takeUntil,
  tap,
  throttleTime,
  toArray,
} from 'rxjs/operators';
@Component({
  selector: 'app-rxjs1',
  templateUrl: './rxjs1.component.html',
  styleUrls: ['./rxjs1.component.css'],
})
export class Rxjs1Component implements OnInit, OnDestroy {
  mesaj: any;
  private _unsubscribeAll: Subject<any>;
  constructor() {
    this._unsubscribeAll = new Subject();
  }
  test1: any;

  ngOnInit(): void {
    const mainString = 'Merhaba, dünya!';
    const subString = 'ya';

    const index = mainString.indexOf(subString);
    console.log(index);

    if (index !== -1) {
      console.log(
        `"${subString}" alt dizesi, "${mainString}" içinde indeks ${index}'de bulundu.`
      );
    } else {
      console.log(
        `"${subString}" alt dizesi, "${mainString}" içinde bulunamadı.`
      );
    }
    // rxjs ile alakalı değil 
    const asset = 'Asset_Alarm_2';
    const index1 = asset.indexOf('_') + 7;
    console.log(index1);
    const result = asset.substring(index1);
    console.log('result', result);

    const result2 = asset.split('_');
    console.log('result2', result2[2]);

  
    this.basicObservable()
    this.tıklama()

  }
  basicObservable(){
    const observable = new Observable(observer=>{
      observer.next("Deneme Observable")
      // observer.error("Error") //eğer bunu açarsam complete çalışmaz
      observer.complete()
    })
   const subs =  observable.subscribe({
      next(val){console.log(val)},
      error(val){ console.log(val)},
      complete(){ console.log("Complete")}
    })
    subs.unsubscribe();
  }
  tıklama(){
    const tıklama = fromEvent(document,"click")
    tıklama.pipe(takeUntil(this._unsubscribeAll)).subscribe(res=>{
      console.log(res)
    })
    tıklama.pipe(takeUntil(this._unsubscribeAll)).subscribe({
   next: event => console.log(event),
  // hata durumunda 
  error: error => console.log(error),
  // tamamlanma durmunda
  complete: () => console.log('Tamamlandı!')
    })
  
  }
  ngOnDestroy(): void {
    this._unsubscribeAll.next('');
    this._unsubscribeAll.complete();
  }
}
