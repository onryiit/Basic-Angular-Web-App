import { Component, OnInit } from '@angular/core';
import { GelirGider } from './test-v1.model';
import { GelirGiderService } from './test-v1.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-test-v1',
  templateUrl: './test-v1.component.html',
  styleUrls: ['./test-v1.component.css']
})
export class TestV1Component implements OnInit  {
  gelirGiderForm: FormGroup;
  data: string = '';
  isGelirOrGider:any
  kategoriler = [{id:1,name:'Şemsettin'}, {id:2,name:'Tayfur'}, {id:3,name:'Amele'}];
  gelirGiders = [{id:1,name:'Gider'}, {id:2,name:'Gelir'}];

  constructor(private fb: FormBuilder) {
    this.gelirGiderForm = this.fb.group({
      kategori: ['', Validators.required],
      tarih: [new Date().toISOString().slice(0, 10), Validators.required], // Bugünün tarihini varsayılan olarak ayarlar
      gider: [0, [Validators.required, Validators.min(0)]], // 0'dan küçük olamaz
      gelirGider: [0, [Validators.required, Validators.min(0)]], // 0'dan küçük olamaz
      desc: [0, [Validators.required, Validators.min(0)]], // 0'dan küçük olamaz
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.gelirGiderForm.controls["gelirGider"].valueChanges.subscribe((res=>{
      this.isGelirOrGider= res
      console.log(this.isGelirOrGider)
    }))
  }

  onSubmit() {
    if (this.gelirGiderForm.valid) {
      const formData: GelirGider = this.gelirGiderForm.value;
      this.data = JSON.stringify(formData); // Gönderilen verileri görüntülemek için
      // TODO: Form verilerini API'ye gönderme veya başka işlemler
    } else {
      this.data = 'Lütfen formu doğru şekilde doldurun.';
    }
  }
}