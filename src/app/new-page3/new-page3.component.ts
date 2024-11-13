import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-new-page3',
  templateUrl: './new-page3.component.html',
  styleUrls: ['./new-page3.component.css'],
})
export class NewPage3Component implements OnInit {
  id: any;
  count: number = 0;
  @Output() customBinding = new EventEmitter<any>();
  @Input() customBindToChild:any;

  constructor(private router: ActivatedRoute) {}
  ngOnInit(): void {
    this.router.params.subscribe((params: Params) => {
      this.id = params['test'];
    });

  }
  increase() {
    this.count += 1;
  }
  decrease() {
    this.count -= 1;
  }
  sendToData(){
    this.customBinding.emit(this.count)
  }
}
