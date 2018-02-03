// angular imports
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// components
import { AppComponent } from './app.component';

// modules
import {LoginModule} from './login/login.module';
import {RegistrationModule} from './registration/registration.module';
import {SharedModule} from './shared/shared.module';

// w tablicy declarations dodajemy komponenty
// w tablicy import dodajemy moduły
// w tablicy providers dodajemy serwisy

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RegistrationModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
