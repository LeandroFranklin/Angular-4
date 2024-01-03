import { Component, Input } from '@angular/core';

import { Coracao } from '../shared/coracao.model';

@Component({
  selector: 'app-tentativas',
  templateUrl: './tentativas.component.html',
  styleUrl: './tentativas.component.css'
})
export class TentativasComponent {

  public coracaoVazio:string = "/assets/coracao_vazio.png";
  public coracaoCheio:string = "/assets/coracao_cheio.png";

  @Input()
  public tentativas!: number;
  

  public coracoes: Coracao[] = [
    new Coracao(true), new Coracao(true), new Coracao(true)
  ]

}
