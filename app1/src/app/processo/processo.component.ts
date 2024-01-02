import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-processo',
  templateUrl: './processo.component.html',
  styleUrl: './processo.component.css'
})
export class ProcessoComponent {

  @Input() public progresso: number = 25; //Property Binding [] do progresso

}
