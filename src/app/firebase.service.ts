import { Injectable } from '@angular/core';

import { initializeApp } from 'firebase/app';
import { Firestore, getFirestore, collection, addDoc, getDocs, deleteDoc, doc, updateDoc, DocumentData, CollectionReference,  } from 'firebase/firestore'





@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  db: Firestore;
  ticketCol: CollectionReference<DocumentData>;


  constructor() {
   
    this.db = getFirestore();
    this.ticketCol = collection(this.db, 'ticket');

    // Get Realtime Data
  
  }

  


  async addTicket(isim: string, mail: string, adres:string,rezTarih:string) {
    await addDoc(this.ticketCol, {
     isim,
      mail,
      adres,rezTarih 
    })
    return;
  }
 }
  