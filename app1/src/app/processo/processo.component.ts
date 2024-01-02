import { Component } from '@angular/core';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrl: './processo.component.css'
})
export class ProcessoComponent {

  public progresso: number = 25; //String interpolation {{}} do progresso

}
