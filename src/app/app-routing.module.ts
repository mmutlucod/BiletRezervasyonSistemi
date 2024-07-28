import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { SecenekComponent } from './secenek/secenek.component';
import { GirisComponent } from './giris/giris.component';
import { SecimComponent } from './secim/secim.component';
import { RezervasyonComponent } from './rezervasyon/rezervasyon.component';

const routes: Routes = [
  {path:'',redirectTo:'/anasayfa', pathMatch:'full'},
  {path:'Anasayfa/Secenek/Secim/Rezervasyon/Payment/:id',component:PaymentComponent},
  {path:'Anasayfa/Secenek/:id',component:SecenekComponent},
  {path:'Anasayfa',component:AnasayfaComponent},
  {path:'secenek/:id', component:SecenekComponent},
  {path:'giris', component:GirisComponent},
  {path:'secim', component:SecimComponent},
  { path: 'Anasayfa/Secenek/Secim/:id', component: SecimComponent }, 
  { path: 'Anasayfa/Secenek/Secim/Rezervasyon/:id', component: RezervasyonComponent },{path:'secenek', component:SecenekComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
