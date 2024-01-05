import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  public jogoEmAndamento: boolean = true;

  public encerrarJogo(tipo: string): void{
    console.log(tipo);
    this.jogoEmAndamento = false;
  }
  
}
