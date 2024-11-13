import { Component, OnInit } from '@angular/core';
import { PromiseService } from './promise.service';
import * as moment from 'moment';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {
  weather:any;
  weather_name:any;
  derece:any;
  date:any
  constructor(private promiseService:PromiseService){}
  ngOnInit(): void {

  this.basicPromise()

  this.promiseAll()  
  this.getWeather()
}
  basicPromise(){
    let number = 1
    const data = new Promise((resolve,reject)=>{
      
      if(number === 1){
        return resolve("işlem tamam")
      }else {
        return reject("Hata")
      }

    })
    return data
  }
  chainPromise(){
    let number = 1
    const data = new Promise((resolve,reject)=>{
      
      if(number === 1){
        return resolve("işlem tamam")
      }else {
        return reject("Hata")
      }

    })
    data.then(res=>{
      console.log(res)
    }).then(value=>{
      console.log(("you can do"))
    }).then(response=>{
      console.log(("everything"))
    }).catch(error=>{
      console.log(error)
    })
  }
  methodsPromise(){
    const basarili = Promise.resolve(42);

// Anında başarısız olan(reject) promise nesnesi
    const basarisiz = Promise.reject('Tüh ya');

// Promise'lerden oluşan bir dizinin gelecekteki değerlerinin 
// hepsinin başarılı sonuçlanması için oluşturulan promise nesnesi 
// const tumIslerBitti = Promise.all([promise1, promise2, ...]);

// Promise dizisi içinden en hızlı başarılı/başarısız 
// olan değeri tutan promise nesnesi
// const enHizliYapan = Promise.race(promiseDizisi)
  }

  //Promise function
  test12():Promise<any>{
    const data = new Promise((resolve,reject)=>{
        resolve("test1")
        reject("error")
    }).catch((error)=>{
      console.log(error)
    })
    return data
  }
  //Async function
  async test1(){
    const data = await this.test12()
    return data;
  }
  //try catch function
  async test2(){
    let data;
    try{
      data = await this.basicPromise()
    }catch(error){
      console.log(error)
    }
    return data
  }
  //promise all
  promiseAll(){
    const allData = Promise.all([this.test1(),this.test2()])
    allData.then(res=>{
      console.log(res)
    })
    const methodPromise = Promise.resolve("test2")
    methodPromise.then(res=>{
      console.log(res)
    })
  }
  async getWeather(){
    this.promiseService.getWeather().then((res:any)=>{
      this.weather = res
      this.derece = this.weather.main.temp
      this.weather_name=(this.weather.name)
      const date = moment(this.weather.dt*1000).format("DD/MM/YYYY HH:MM:SS")
      this.date = date
     })
    
  }
}
