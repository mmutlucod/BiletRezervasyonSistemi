import {
  Component,
  INJECTOR,
  Input,
  Output,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketService } from '../services/tickets.service';
import { VeriService } from '../veri.service';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { FirebaseService } from '../firebase.service';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css'],
})
export class PaymentComponent implements OnInit, OnDestroy {
  @Input() sonuc: number;
  title = 'bilet';
  ticketsId;
  course;
  routeParamObs;
  id;
  ticketDetails = {
    isim: '',
    mail: '',
    adres: '',
    rezTarih: '',
  };
  ticket;
  fiyat: number;
  tickets: Observable<any[]>;
  constructor(
    db: AngularFireDatabase,
    private service: TicketService,
    private activatedRoute: ActivatedRoute,
    private firebaseService: FirebaseService,
    public appState: VeriService
  ) {
    appState.event.subscribe((sonuc) => {
      console.log(sonuc);
    });
    this.tickets = db.list('/tickets').valueChanges();
  }
  ngOnInit(): void {
    this.routeParamObs = this.activatedRoute.paramMap.subscribe((param) => {
      this.ticketsId = param.get('id');
      this.ticket = this.service.tickets.find((x) => x.id == this.ticketsId);
    });

    this.paymentStripe();
  }
  handler: any = null;

  ode(amount: any) {
    var handler = (<any>window).StripeCheckout.configure({
      key: 'pk_test_51HxRkiCumzEESdU2Z1FzfCVAJyiVHyHifo0GeCMAyzHPFme6v6ahYeYbQPpD9BvXbAacO2yFQ8ETlKjo4pkHSHSh00qKzqUVK9',
      locale: 'auto',
      token: function (token: any) {
        console.log(token);
        alert('İşlem Başarılı');
     
      },
    });

    handler.open({
      name: 'Ödeme Sayfası',
      description: 'Bilgileri giriniz.',
      amount: amount * 100,
    });
  }

  paymentStripe() {
    if (!window.document.getElementById('stripe-script')) {
      var s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (<any>window).StripeCheckout.configure({
          key: 'pk_test_51LcTi9A8wYIFHVXpOnBTE2i0qXueFvzXqD6kIvIs8NAXQEQ54qU1Y9aKXVahIg6yaH9fRsFmBKuALn83jbY9D1Lg00ZgktEemM',
          locale: 'auto',
          token: function (token: any) {
            console.log(token);
            alert('Ödeme Başarılı!!');
          },
        });
      };

      window.document.body.appendChild(s);
    }
  }
  ngOnDestroy() {
    this.routeParamObs.unsubscribe();
  }
  async add() {
    const { isim, mail, adres, rezTarih } = this.ticketDetails;
    await this.firebaseService.addTicket(isim, mail, adres, rezTarih);
    this.ticketDetails.isim = '';
    this.ticketDetails.mail = '';
    this.ticketDetails.adres = '';
    this.ticketDetails.rezTarih = '';
  }
}
