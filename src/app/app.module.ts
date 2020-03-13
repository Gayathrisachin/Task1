import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HomeComponent } from './home/home.component';
import { ListUserComponent } from './list-user/list-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {FormsModule,ReactiveFormsModule} from '@angular/forms';

import {  MatSelectModule,MatDialogModule,MatNativeDateModule,MatDatepickerModule,MatIconModule,MatButtonModule, MatToolbarModule,MatFormFieldModule,MatInputModule,MatListModule,MatTableModule} from  '@angular/material';
import { UserService } from './services/user.service';
import {
  MAT_DIALOG_DATA,
  MAT_DATE_LOCALE,
  MAT_DATE_FORMATS,
  DateAdapter} from "@angular/material";
import { MAT_MOMENT_DATE_FORMATS } from '@angular/material-moment-adapter';
import { MomentUtcDateAdapter } from './user/date.adapter';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    ListUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
     MatFormFieldModule,
     MatInputModule,
    MatListModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [UserService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
    { provide: DateAdapter, useClass: MomentUtcDateAdapter },],
  bootstrap: [AppComponent]
})
export class AppModule { }
