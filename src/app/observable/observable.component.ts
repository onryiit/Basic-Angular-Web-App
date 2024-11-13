import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  BehaviorSubject,
  Observable,
  combineLatest,
  concat,
  filter,
  from,
  fromEvent,
  map,
  merge,
  of,
  tap,
} from 'rxjs';
import { PromiseService } from '../promise/promise.service';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css'],
})
export class ObservableComponent implements OnInit,OnDestroy{
  test: BehaviorSubject<any> = new BehaviorSubject({});
  data :any;
  constructor(private promiseService : PromiseService){

  }
  ngOnDestroy(): void {
   this.test.unsubscribe()
  }
  ngOnInit(): void {
    this.ObservableBasic();
    this.Observable();
    this.test2();
    this.operatör();
    this.promiseService.getWeather().then((res) => {
      this.data = new Observable((x: any) => {
        try {
          x.next(res);
          x.complete();
        } catch (error) {
          x.error(error);
        }
      });
      this.data.subscribe({
        next: (value: any) => console.log(value),
        error: (value: any) => console.log(value),
        complete: () => console.log('Data is came'),
      });
      this.test.next(res);
    });
    this.test.subscribe(res=>{
      console.log(res)
    })
  }
  ObservableBasic() {
    // kendin de observable üretebilirsin new Observable yapmak yeterli.
    const data = new Observable((observer) => {
      try{
        observer.next('hello');
        observer.next('world!');
        observer.complete()
      }catch(error){
        observer.error(error)
      }
    });
    data.subscribe({
      next: (event) => console.log(event),
      error: (event) => console.error(event),
      complete: () => console.log('ok'),
    });
  }
  Observable() {
    //observable yapmanın en kolay yolu operatörler.
    const data = [1, 2, 3]
    const ofArray = of(...data);
    ofArray.subscribe((res) => {
      console.log('of array log: ', res);
      console.error('of array error: ', res);
      console.warn('of array warn: ', res);
    });
    const fromArray = from(data);
    fromArray.subscribe({
      next: (event) => console.log('From Array: ', event),
    });

    fromArray
      .pipe(
        map((value) => value * 2),
        filter((e) => e % 2 === 0),
      )
      .subscribe((res) => {
        console.log('Pipe,map,filter: ', res);
      });
  }
  test2() {
    const data = [1, 2, 3]
    const tıklama = of(...data); // ...data spread operatörü js de 
    tıklama.subscribe({
      next: (value) => console.log(value),
      error: (value) => console.log(value),
      complete: () => console.log('Tamamlandı'),
    });
  }
  operatör() {
    const data = [10, 20, 30, 40, 50]
    const data1 = [1,2,3]
    const kaynakBir$ = from(data);
    // const kaynakIki$ = of(1, 2, 3);
    const kaynakIki$ = of(...data1);
    const sonuc$ = concat(kaynakBir$, kaynakIki$).pipe(
      filter((test) => {
        return test > 20;
      })
    );
    sonuc$.subscribe((x) => console.log('Sonuc:' + x));
    
  }
  
}
