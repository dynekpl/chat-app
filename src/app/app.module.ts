// angular imports
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

// components
import {AppComponent} from './app.component';

// modules
import {LoginModule} from './login/login.module';
import {RegistrationModule} from './registration/registration.module';
import {SharedModule} from './shared/shared.module';
import {RoutingModule} from './router/routing.module';

// services
import {AuthenticationService} from './services/authentication.service';
import {LoginComponent} from './login/components/login/login.component';
import {RegistrationComponent} from './registration/components/registration/registration.component';
import {MenuComponent} from './menu/menu.component';

// w tablicy declarations dodajemy komponenty
// w tablicy import dodajemy moduły
// w tablicy providers dodajemy serwisy

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    LoginModule,
    RegistrationModule,
    SharedModule,
    RoutingModule
  ],
  providers: [AuthenticationService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
