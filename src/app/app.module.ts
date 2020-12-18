import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { HttpClientModule } from '@angular/common/http';
=======
import { ProfileComponent } from './profile/profile.component';
import { ListComponent } from './list/list.component';

>>>>>>> d7ab2645e71bd56ab6dfabbb906cc2e5aa341fcf
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
