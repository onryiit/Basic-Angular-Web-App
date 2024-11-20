import { Component, OnInit } from '@angular/core';
import { AuthService } from './AuthService.service';
import { Router } from '@angular/router';
import { AuthenticatorService } from '@aws-amplify/ui-angular';
import { translations } from '../../translations';
import { I18n } from '@aws-amplify/core';
@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit{
  languages:any;
  selectedLanguage:any;
  currentLanguage: string = 'en';
  constructor(private authenticatorService: AuthenticatorService,private router: Router){
    this.languages = [
      {
          id: "en",
          title: "English",
          flag: "us",
      },
      {
          id: "tr",
          title: "Turkish",
          flag: "tr",
      },
  ];
    this.authenticatorService = authenticatorService;
    authenticatorService.subscribe((data: any) => {
      console.log(data)
      if (data.authStatus === "authenticated") {
        this.router.navigate(['/home']);
      }else{
        this.router.navigate(['/sign-in']);
      }
    })
  }
  ngOnInit() {
    this.selectedLanguage = localStorage.getItem('selectedLanguage');
    this.selectedLanguage = JSON.parse(this.selectedLanguage) || this.languages[0]
    if (this.selectedLanguage.id) {
      this.setLanguage(this.selectedLanguage.id);
      this.currentLanguage = this.selectedLanguage.id;
    } else {
      this.setLanguage(this.currentLanguage);
    }
  }

  updateLanguage(language:any) {
    this.currentLanguage = language.id;
    this.setLanguage(language.id);
    localStorage.setItem('selectedLanguage', JSON.stringify(language));
    window.location.reload();
  }

  setLanguage(language: string) {
    I18n.setLanguage(language);
    I18n.putVocabularies(translations);
  }
}
