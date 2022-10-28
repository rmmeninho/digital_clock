import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  hora:any;
  minuto:any;

  title = 'reloj_proyect';

  ngOnInit(){
    
    setInterval(()=>{
      this.relojDigital();
    },1000);
 
  }

  relojDigital(){
    this.hora = new Date();
    this.minuto = new Date();

  }

 

}
