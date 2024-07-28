import { Component, OnInit,OnDestroy , TemplateRef,AfterViewInit, ViewChild, ViewContainerRef } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { TicketService } from '../services/tickets.service';
import { Portal, TemplatePortal} from '@angular/cdk/portal';
import { FirebaseService } from '../firebase.service';
import { VeriService } from '../veri.service';
@Component({
  selector: 'app-rezervasyon',
  templateUrl: './rezervasyon.component.html',
  styleUrls: ['./rezervasyon.component.css'],
 
})
export class RezervasyonComponent implements OnInit,AfterViewInit, OnDestroy {
  @ViewChild('templatePortalContent') templatePortalContent: TemplateRef<unknown>;
  selectedPortal: Portal<any>;
  templatePortal: TemplatePortal<any>;
 
 ticketDetails ={
  rezTarih :''
 }
  isOpen = false;
  ticket ;
  
   sonuc1?:number;
   sonuc2:number;
  sonuc:number;
  deger2?:number;
  deger1?:number;
  ticketsId;
  course;
  routeParamObs;
 number:number;
  NaN;
   
  constructor( private router:Router,private route: ActivatedRoute,private service:TicketService,private activatedRoute:ActivatedRoute,private firebaseService: FirebaseService ,private _viewContainerRef: ViewContainerRef,public appState: VeriService ) { 
    appState.publish({sonuc: this.sonuc});
  }

 
  getHesapla(){
   
    this.sonuc1 = this.ticket.fiyat * this.deger1 ;
     this.sonuc2 =this.ticket.fiyat * this.deger2 ;
      this.sonuc  = this.sonuc1 + this.sonuc2;
     return this.sonuc;
     
  }
  isNumber(value) {
    return Number.isNaN(value);
  }
ngAfterViewInit(): void {
  this.templatePortal = new TemplatePortal(this.templatePortalContent, this._viewContainerRef);
 
}
  ngOnInit():void {
  
  this.isNumber(this.sonuc)
 
    this.routeParamObs= this.activatedRoute.paramMap.subscribe((param)=>{
      this.ticketsId=param.get('id');
      this.ticket = this.service.tickets.find(x=>x.id==this.ticketsId)
    })
    

  }
 
  ngOnDestroy(){
    this.routeParamObs.unsubscribe();
  }
  onSelect(sonuc:number):any {
    alert(this.ticketDetails.rezTarih);
    return this.router.navigate(['/Anasayfa/Secenek/Secim/Rezervasyon/Payment/'+this.ticket.id ])
  }
 
}

