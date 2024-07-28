import { Component, INJECTOR, Input, Output } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';
import { Location } from '@angular/common';

var  a: number;
var result;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent{
  


  title = 'giris';

  anasayfaGit(){
    setTimeout(function(){
     
      window.location.assign ("/Anasayfa")})
  }
  girisGit(){
    setTimeout(function(){
     
      window.location.assign ("/giris")})
  }
  


// siteyeGit(){
//   window.open('https://www.biletantalya.com/Ticket/List/AntalyaAquarium',"_self");
// }

constructor( private store: AngularFirestore,private location: Location) { }
goBack(): void {
  this.location.back();
}
  ngOnInit(): void {
  }

  }



