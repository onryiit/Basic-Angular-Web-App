import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSelect } from '@angular/material/select';
import * as moment from 'moment';
@Component({
  selector: 'app-item-component',
  templateUrl: './item-component.component.html',
  styleUrls: ['./item-component.component.css'],
})
export class ItemComponentComponent implements OnInit, AfterViewInit {
  currentForm!: FormGroup;
  @ViewChild('selection') selection!: MatSelect;
  typeList: any[] = [
    { id: 1, name: 'Type1' },
    { id: 2, name: 'Type2' },
    { id: 3, name: 'Type3' },
    { id: 4, name: 'Type4' },
  ];
  count: number = 1;
  constructor(
    private formBuilder: FormBuilder,
    private cdr: ChangeDetectorRef
  ) {}
  ngOnInit(): void {
    this.createForm();
  }
  ngAfterViewInit() {
    // if (this.count === 1) {
    //   this.selection.open();
    //   this.cdr.detectChanges();
    // }
  }
  createForm(): void {
    this.currentForm = this.formBuilder.group({
      headerTitle: [''],
      type: [''],
      checkbox: [],
      date:[]
    });
  }
  openedChange() {
    console.log('Selection opened or closed');
  }
  opened() {
    console.log('Selection opened');
  }
  closed() {
    console.log('Selection closed');
  }
  onChanged(event: any) {
    console.log(event.value);
  }
  sendDataToDatabase() {
    const data = this.currentForm.getRawValue();
    data.date = moment(data.date).utc().unix();
    localStorage.setItem('formData', JSON.stringify(data));
  }
}
