import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ItemComponentComponent } from './item/item-component.component';
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
  constructor(private dialog: MatDialog) {}
  ngOnInit(): void {}
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
      const data = localStorage.getItem('formData');
      let arrayData: any[] = [];
      if (data) {
        if (Array.isArray(data)) {
          this.dataSource = JSON.parse(data);
        } else {
          arrayData.push(JSON.parse(data));
          this.dataSource = arrayData;
        }
        console.log('Güncellenmiş Data:', this.dataSource);
      } else {
        console.log('Veri bulunamadı veya geçersiz!');
      }
    });
  }
}
