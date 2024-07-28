import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-giris',
  templateUrl: './giris.component.html',
  styleUrls: ['./giris.component.css']
})
export class GirisComponent implements OnInit {

  constructor() { }
  anasayfaGit(){
    setTimeout(function(){
     
      window.location.assign ("/anasayfa")})
  }
  
  ngOnInit() {
  }

}
