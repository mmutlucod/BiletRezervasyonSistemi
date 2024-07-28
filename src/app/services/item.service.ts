import { Injectable } from '@angular/core';
import {AngularFirestore,AngularFirestoreCollection,AngularFirestoreDocument}
from  '@angular/fire/compat/firestore';
import { Ticket } from 'src/model/course';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ItemService {


  constructor(public afs:AngularFirestore) {

  }
  biletGetir(){
    return this.afs.collection('bilet').snapshotChanges();
 }
 biletId(biletId:string){
  return this.afs.collection('bilet').doc(biletId).valueChanges()
 }
 
}

