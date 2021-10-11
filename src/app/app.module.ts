import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiciiComponent } from './servicii/servicii.component';
import { DespreAsociatieComponent } from './despre-asociatie/despre-asociatie.component';
import { ContactComponent } from './contact/contact.component';
import { AcasaComponent } from './acasa/acasa.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ServiciiComponent,
    DespreAsociatieComponent,
    ContactComponent,
    AcasaComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

