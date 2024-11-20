import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { AuthService } from '../sign-in/AuthService.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'material';
  date:any;
  selectedTime: any;
  buttons:any []=[];
  constructor(public dialog: MatDialog,private authService:AuthService) {}
  ngOnInit(): void {
    this.authService.getCurrentSession().then((res:any)=>{
      // console.log(res)
    })
  }

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      height: '500px',
      width: '1000px',
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}

