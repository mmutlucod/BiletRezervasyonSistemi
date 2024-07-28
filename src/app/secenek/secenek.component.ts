import { Component, OnInit,Input,Output } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { TicketService } from '../services/tickets.service';
import { ActivatedRoute,Router } from '@angular/router';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-secenek',
  templateUrl: './secenek.component.html',
  styleUrls: ['./secenek.component.css'],
})
export class SecenekComponent implements OnInit {
  ticket ;
  indirim:number;
  ticketsId;
  course;
  routeParamObs;
  tickets:Observable<any[]>;
 
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
        this.email.hasError('email') ? 'Not a valid email' :
            '';
  }


  panelOpenState = false;
 
  tcno;
  fiyat:number;
    tcKontrolFonk(tcno:any) {
      console.log("girdi");
      var tckontrol,toplam; tckontrol = tcno; tcno = tcno.value; toplam =
      Number(tcno.substring(0,1)) + Number(tcno.substring(1,2)) +
      Number(tcno.substring(2,3)) + Number(tcno.substring(3,4)) +
      Number(tcno.substring(4,5)) + Number(tcno.substring(5,6)) +
      Number(tcno.substring(6,7)) + Number(tcno.substring(7,8)) +
      Number(tcno.substring(8,9)) + Number(tcno.substring(9,10));
      const strtoplam = String(toplam); 
      const onunbirlerbas = strtoplam.substring(strtoplam.length,strtoplam.length-1);
      
      if(onunbirlerbas == tcno.substring(10,11)) {
        console.log("Girdi");
        alert("TC Kimlik Numarası Doğru, Ödeme Sayfasına Aktarılıyorsunuz.");
        
        this.ticket.fiyat= this.ticket.fiyat*6/10; 
       this.onSelect()
        return this.ticket.fiyat;
        
        
     
      } 
      else{
        alert("TC Kimlik Numarası Doğru Değil!!");
      this.onSelect1()
     
        return this.fiyat;
      }
      
    }
    indirimli(x:number){

      
      this.fiyat= (x*6)/10
      return this.fiyat;
    }
  tabbing=0;
  tabClick(event){
    this.tabbing=event.index;
  }
  
  constructor(private router:Router,
   private service:TicketService,private activatedRoute:ActivatedRoute,db :AngularFireDatabase, ) {
      this.ticket = db.list('/tickets').valueChanges();
      
     }
   
  

  ngOnInit():void {
    this.routeParamObs= this.activatedRoute.paramMap.subscribe((param)=>{
      this.ticketsId=param.get('id');
      this.ticket = this.service.tickets.find(x=>x.id==this.ticketsId)
     
    })
  }
  onSelect():any {
    return this.router.navigate(['/Anasayfa/Secenek/Secim/'+this.ticket.id])

  }
  onSelect1():any{
    return this.router.navigate(['/secenek/'+this.ticket.id])
  }
}
