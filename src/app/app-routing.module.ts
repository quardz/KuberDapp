import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DappComponent } from './pages/dapp/dapp.component';
import { StatsComponent } from './pages/stats/stats.component';
import { NftsComponent } from './pages/nfts/nfts.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'dapp', component: DappComponent },
  { path: 'stats', component: StatsComponent },
  { path: 'nfts', component: NftsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { } 