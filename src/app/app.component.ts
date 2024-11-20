import { Component } from '@angular/core';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AuthService } from './sign-in/AuthService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'material';

  selectedTime: any;
  buttons:any []=[];
  constructor(public dialog: MatDialog,private authService:AuthService,private router:Router) {}

  openDialog() {
    const dialogRef = this.dialog.open(DialogComponent,{
      height: '500px',
      width: '1000px',
    });


    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  signOut(){
    this.authService.signOut();
    this.router.navigate(["sign-in"])
  }
}
