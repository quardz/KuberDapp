import { APP_INITIALIZER, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
//import Web3 from "web3";
//import WalletLink from "walletlink";

//import { Web3Modal } from "@mindsorg/web3modal-ts";
//import WalletLink from "walletlink";
import Web3 from "web3";
//import Web3Modal from "web3modal";

import { W3Service } from './services/w3.service';


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


export function W3Provider(w3service: W3Service) {
  return () => w3service.load();
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
    ConnecterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,

    NgbModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [
    W3Service,
    { provide: APP_INITIALIZER, useFactory: W3Provider, deps: [W3Service], multi: true }        
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
