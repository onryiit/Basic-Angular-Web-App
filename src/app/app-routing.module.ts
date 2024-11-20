import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PromiseComponent } from './promise/promise.component';
import { ObservableComponent } from './observable/observable.component';
import { Rxjs1Component } from './rxjs1/rxjs1.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';
import { TestV1Component } from './test-v1/test-v1.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { NewPageComponent } from './new-page/new-page.component';
import { NewPage1Component } from './new-page1/new-page1.component';
import { NewPage2Component } from './new-page2/new-page2.component';
import { NewPage3Component } from './new-page3/new-page3.component';
import { AuthGuard } from './core/guard/authGuard/auth.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'promise', component: PromiseComponent, canActivate: [AuthGuard] },
  { path: 'observable', component: ObservableComponent, canActivate: [AuthGuard] },
  { path: 'rxjs', component: Rxjs1Component, canActivate: [AuthGuard] },
  { path: 'rxjsSubject', component: RxjsSubjectComponent, canActivate: [AuthGuard] },
  { path: 'testV1', component: TestV1Component, canActivate: [AuthGuard] },
  { path: 'form', component: FormComponentComponent, canActivate: [AuthGuard] },
  { path: 'sign-in', component: SignInComponent },
  {
    path: 'newpage',
    component: NewPageComponent,
    canActivate: [AuthGuard],
    children: [
      { path: 'newpage/:id', component: NewPage1Component },
      { path: 'two', component: NewPage2Component },
      { path: 'three', component: NewPage3Component },
    ],
  },
  { path: '**', redirectTo: '/sign-in' }, // 404
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
