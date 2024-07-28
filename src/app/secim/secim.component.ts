import { Component, OnInit} from '@angular/core';
import { VeriService } from '../veri.service';
import { ActivatedRoute,Router } from '@angular/router';
import { TicketService } from '../services/tickets.service';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-secim',
  templateUrl: './secim.component.html',
  styleUrls: ['./secim.component.css']
})
export class SecimComponent implements OnInit {
  
  title = 'bilet';
  ticket ;
  tickets:Observable<any[]>;
  ticketsId;
  course;
  routeParamObs;

  constructor(private route: ActivatedRoute,
    private veriService: VeriService,private service:TicketService,private activatedRoute:ActivatedRoute,
    private router:Router,db :AngularFireDatabase) { 
      this.tickets = db.list('/tickets').valueChanges();
    }
  ticketData:any;

  ngOnInit() :void {
   
   
 
  //this.ticketsId = this.activatedRoute.snapshot.paramMap.get('id');
  //this.ticket= this.service.tickets.find(x=>x.id==this.ticketsId)
 this.routeParamObs= this.activatedRoute.paramMap.subscribe((param)=>{
    this.ticketsId=param.get('id');
    this.ticket = this.service.tickets.find(x=>x.id==this.ticketsId)
  })
   
  }

 
  ngOnDestroy(){
    this.routeParamObs.unsubscribe();
  }
  onSelect():any {
    return this.router.navigate(['/Anasayfa/Secenek/Secim/Rezervasyon/'+this.ticket.id])
  }
}