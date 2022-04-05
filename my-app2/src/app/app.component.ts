import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mia App 2';

  imgPath = "https://static.fanpage.it/wp-content/uploads/sites/16/2020/09/paolo-brosio-gfvip.jpg"

  isLiked = false;

  piuClassi = {
    rosso: true,
    under: true
  }

  nomeDelComponent = "Paolo Brosio"

  public onClick(){
    console.log("Ciao");
  }

  public onLike(){
    console.log("Ti piace " + this.nomeDelComponent);
    
  }

  


}
