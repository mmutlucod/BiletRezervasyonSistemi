import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute, DebugTracingFeature, Router } from '@angular/router';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-anasayfa',
  templateUrl: './anasayfa.component.html',
  styleUrls: ['./anasayfa.component.css'],
})
export class AnasayfaComponent implements OnInit {
  x: number;
  title = 'bilet';

  tickets: Observable<any[]>;

  data: any;


  div1: boolean = false;
  div2: boolean = true;

  allTicket: any;

  constructor(db: AngularFireDatabase, private route: Router) {
    this.tickets = db.list('/').valueChanges();
  }

  ngOnInit() {}
 div1Function(id: number): any {
    this.route.navigate(['secim/' + id]);
  }
  
}
