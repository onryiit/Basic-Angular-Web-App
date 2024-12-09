import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormsModule } from '@angular/forms';
import { NewPageComponent } from './new-page/new-page.component';
import { NewPage1Component } from './new-page1/new-page1.component';
import { NewPage2Component } from './new-page2/new-page2.component';
import { HomeComponent } from './home/home.component';
import { NewPage3Component } from './new-page3/new-page3.component';
import { Rxjs1Component } from './rxjs1/rxjs1.component';
import { RxjsSubjectComponent } from './rxjs-subject/rxjs-subject.component';
import { ObservableComponent } from './observable/observable.component';
import { PromiseComponent } from './promise/promise.component';
import { HttpClientModule } from '@angular/common/http';
import { PromiseService } from './promise/promise.service';
import { TestV1Component } from './test-v1/test-v1.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { FormComponentComponent } from './form-component/form-component.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { ItemComponentComponent } from './form-component/item/item-component.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { PipeModule } from './core/pipes/pipe.module';
import { DirectiveModule } from './core/directives/directives.module';
import {MatTooltipModule} from '@angular/material/tooltip';
import { Amplify } from 'aws-amplify';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthGuard } from './core/guard/authGuard/auth.guard';
import { FlexLayoutModule } from '@angular/flex-layout';
import { KtdGridModule } from '@katoid/angular-grid-layout';
import { DragDropGrdiComponent } from './drag-drop-grdi/drag-drop-grdi.component';
import { MatChipsModule } from '@angular/material/chips';







Amplify.configure({
  Auth: {
    Cognito: {
      userPoolId: '<user-pool-id>',
      userPoolClientId: '<user-pool-client-id>'
    }
  }
});

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    HomeComponent,
    NewPageComponent,
    NewPage1Component,
    NewPage2Component,
    NewPage3Component,
    Rxjs1Component,
    RxjsSubjectComponent,
    ObservableComponent,
    PromiseComponent,
    TestV1Component,
    FormComponentComponent,
    ItemComponentComponent,
    SignInComponent,
    DragDropGrdiComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    FormsModule,
    HttpClientModule,
    MatPaginatorModule,
    MatMenuModule,
    MatTableModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    PipeModule,
    MatNativeDateModule,
    DirectiveModule,
    MatTooltipModule,
    AmplifyAuthenticatorModule,
    FlexLayoutModule,
    KtdGridModule,
    MatChipsModule
  ],
  providers: [PromiseService,AuthGuard,AppRoutingModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
