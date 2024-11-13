import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new-page2',
  templateUrl: './new-page2.component.html',
  styleUrls: ['./new-page2.component.css']
})
export class NewPage2Component {
  count:any;
  constructor(private routes:Router){

  }
  navigate(){
    this.routes.navigate(['./newpage/three',{"test":"1234"}])
  }
  childToParent(event:any){
    this.count = event
  }
}
