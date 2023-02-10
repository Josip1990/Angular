import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './components/cats/cats.component';

import { HttpClientModule } from '@angular/common/http';
import { DogsComponent } from './components/dogs/dogs.component';
import { HeaderComponent } from './components/header/header.component';
import { MouseComponent } from './components/mouse/mouse.component';
@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    MouseComponent,
    DogsComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
