import { APP_INITIALIZER, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms'; 
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { ToastrModule } from 'ngx-toastr';



import Web3 from "web3";

import { W3Service } from './services/w3.service';
import { W3apiService } from './services/w3api.service';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { StatsComponent } from './pages/stats/stats.component';
import { DappComponent } from './pages/dapp/dapp.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

import { HomeComponent } from './pages/home/home.component';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ConnecterComponent } from './components/connecter/connecter.component';
import { DateTimePickerComponent } from './components/date-time-picker/date-time-picker.component';
import { NftsComponent } from './pages/nfts/nfts.component';


export function W3Provider(w3service: W3Service) {
  return () => w3service.load();
}

export function W3apiProvider(w3apiService: W3apiService) {
  return () => w3apiService.getRemoteDappData();
}



@NgModule({
  declarations: [ 
    AppComponent,
    HeaderComponent,
    FooterComponent,
    StatsComponent,
    DashboardComponent,
    HomeComponent,
    DappComponent,
    ConnecterComponent,
    DateTimePickerComponent,
    NftsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module    
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,    
    FormlyModule.forRoot(),
    FormlyBootstrapModule,
    ToastrModule.forRoot(), // ToastrModule added 
    NgbModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    W3Service,
    W3apiService,
    { provide: APP_INITIALIZER, useFactory: W3Provider, deps: [W3Service], multi: true },
    { provide: APP_INITIALIZER, useFactory: W3apiProvider, deps: [W3apiService], multi: true }        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
