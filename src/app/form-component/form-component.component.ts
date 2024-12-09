import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemComponentComponent } from './item/item-component.component';
import { FormService } from './form.service';
export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css'],
})
export class FormComponentComponent implements OnInit {
  displayedColumns: string[] = ['header', 'type', 'checkbox', 'date'];
  dataSource: any;
  constructor(private dialog: MatDialog,private formService:FormService) {}
  ngOnInit(): void {
    this.formService.getForms().subscribe((val:any)=>{
      console.log(val)
      if (val) {
        this.dataSource = val;
        console.log('Güncellenmiş Data:', this.dataSource);
      } else {
        console.log('Veri bulunamadı veya geçersiz!');
      }
    });
  }
  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const dialogRef = this.dialog.open(ItemComponentComponent, {
      width: 'auto',
      height: 'auto',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(() => {
      this.formService.getForms().subscribe((val:any)=>{
        console.log(val)
        if (val) {
          this.dataSource = val;
          console.log('Güncellenmiş Data:', this.dataSource);
        } else {
          console.log('Veri bulunamadı veya geçersiz!');
        }
      });
    })
  }
}
