import { Component, OnInit } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject, from, multicast, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Component({
  selector: 'app-rxjs-subject',
  templateUrl: './rxjs-subject.component.html',
  styleUrls: ['./rxjs-subject.component.css'],
})
export class RxjsSubjectComponent implements OnInit {
  subject: any;
  alertList:any;
  behSubject:BehaviorSubject<any> = new BehaviorSubject(5); //başlangıç verisini belleğinde tutarBaşlangıç değeri 5
  repSubject:ReplaySubject<any> = new ReplaySubject(4); // son dört veriyi belleğinde tutar
  asySubject:AsyncSubject<any> = new AsyncSubject(); // complete methodu çağırıldıktan sonra en son gelen veriyi abonelere dağıtır. 
  /**
     * Resolve
     * @param {ActivatedRouteSnapshot} route
     * @param {RouterStateSnapshot} state
     * @returns {Observable<any> | Promise<any> | any}
     */

      resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> | Promise<any> | any {
        return new Promise<void>((resolve, reject) => {
            Promise.all([]).then(() => {
                resolve();
            }, reject);
        });
    }
  constructor(private http: HttpClient) {
    this.subject = new Subject<number>(); //elindeki verileri tüm abonelere dağıtır
  }

  ngOnInit(): void {
    // this.firstSubject();
    // this.subjectWihtOperator()
    this.behaviourSubject()
    // this.replaySubject()
    // this.asyncSubject()
    // this.basicSubject()

  }
  basicSubject(){
    const subject = new Subject<any>();
    subject.subscribe(res=>{
      console.log(res)
    })
    subject.subscribe(res=>{
      console.log(res)
    })
    subject.next(1)
    subject.next(2)
  }
  //subject birden fazla observera değer atama yapmak için (observer = observable içindeki değişken adı)
  firstSubject() {
    this.subject.subscribe({
      next(val: any) {
        console.log('Observer 1: ', val);
      },
    });
    this.subject.subscribe({
      next(val: any) {
        console.log('Observer 2: ', val);
      },
    });
    this.subject.next(1);
    this.subject.next(2);
  }

  subjectWihtOperator(){
    const observable = of(1,2,3)
    this.subject.subscribe({
      next(v:any){console.log("Obs A: ",v)}
    })
    this.subject.subscribe({
      next(v:any){console.log("Obs B: ",v)}
    })
  
    observable.subscribe(this.subject)
  }
  //başlangıç Değerini hafızasında tutar
  behaviourSubject(){
    this.behSubject.subscribe({
      next(value) {
          console.log("OBS1",value)
      },
    })
    this.behSubject.subscribe(res=>{
      console.log("OBS2",res)
    })
    this.behSubject.next(2)
    this.behSubject.next(3)
    //behaviour subject son değeri yeni gelen aboneye verir hafızasında bir önceki değeri tuttuğu için
    setTimeout(()=>{
      this.behSubject.subscribe({
        next(value) {
            console.log("OBS Sonradan Subscribe Olan Observal",value)
        },
      })
    })
    //sonradana dahil oaln veriyi tüm abonelere basar
    setTimeout(()=>{
      this.behSubject.next(4)
    })
  }
  //bahaviourdan farkı son kaç veriyi alında tutması gerektiğini belirtirsiniz başlangıçta
  replaySubject(){
    this.repSubject.subscribe({
      next(value) {
          console.log("REPOBS: ",value)
      },
    })
    this.repSubject.next(1)
    this.repSubject.next(2)
    this.repSubject.next(3)
    this.repSubject.next(4)
    this.repSubject.next(5)
    this.repSubject.next(6)
    this.repSubject.subscribe({
      next(value) {
          console.log("REPOBS ikinci abone: ",value)
      },
    })
    this.repSubject.next(7)
  }
  //Süreç tamamlandıktan sonra en son değeri tüm observer’lara gönderen bir Subject türüdür.
  asyncSubject(){

    this.asySubject.subscribe({
      next: (v) => console.log(`observerA: ${v}`)
    });
    
    this.asySubject.next(1);
    this.asySubject.next(2);
    this.asySubject.next(3);
    this.asySubject.next(4);
    
    this.asySubject.subscribe({
      next: (v) => console.log(`observerB: ${v}`)
    });
    
    this.asySubject.next(5);
    this.asySubject.complete();
  }
}
