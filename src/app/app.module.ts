import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentComponent } from './payment/payment.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatExpansionModule} from '@angular/material/expansion';
import { AnasayfaComponent } from './anasayfa/anasayfa.component';
import { TicketService } from './services/tickets.service';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { SecenekComponent } from './secenek/secenek.component';
import { GirisComponent } from './giris/giris.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatFormFieldModule  } from '@angular/material/form-field';
import {MatInputModule} from  '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule } from '@angular/material/select';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {MaterialExampleModule} from '../material.module';
import { SecimComponent } from './secim/secim.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { VeriService } from './veri.service';
import { ItemService } from './services/item.service';
import { MesajService } from './mesaj.service';
import { AngularFirestoreModule,AngularFirestore} from '@angular/fire/compat/firestore';
import {AngularFireModule} from '@angular/fire/compat'
import {environment} from 'src/environments/environment'
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RezervasyonComponent} from './rezervasyon/rezervasyon.component';
import { AngularFireDatabase , AngularFireList} from '@angular/fire/compat/database';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireMessagingModule } from '@angular/fire/compat/messaging';
import { AsyncPipe } from '../../node_modules/@angular/common';
@NgModule({
  declarations: [							
    AppComponent,
  
    PaymentComponent,
      AnasayfaComponent,
      SecenekComponent,
      GirisComponent,
      SecimComponent,
      RezervasyonComponent,
   ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(environment.firebase),
     MatSelectModule, FormsModule,MatExpansionModule,BrowserModule,AppRoutingModule,HttpClientModule,MatIconModule,MatNativeDateModule ,FontAwesomeModule, MatFormFieldModule, MatInputModule,BrowserAnimationsModule, 
     ReactiveFormsModule,RouterModule,  
    HttpClientModule,AngularFireAuthModule,FirestoreModule,MaterialExampleModule,AngularFirestoreModule,AngularFireMessagingModule
  ],
  providers: [ VeriService,MesajService,,ItemService,TicketService,AngularFireDatabase, AsyncPipe],
  
  schemas: [CUSTOM_ELEMENTS_SCHEMA,],
  bootstrap: [AppComponent]
})
export class AppModule { }
