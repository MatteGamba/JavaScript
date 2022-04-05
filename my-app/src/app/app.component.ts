import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Prima APP Angular';
  piaciuto = false;

  classiAttuali = {
    star: false,
    active: false,

    modStar(){
      console.log("metodo");
      
    }
    
  }
    public cambiaClasse(){
      this.classiAttuali.star = false;
    }
    
    public alClick(){
      console.log("Pulsante");
      document.getElementsByClassName("star")[0].setAttribute("style", "color:black")
      
    }

}
