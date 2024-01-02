import { Component } from '@angular/core';

import { Frase } from '../shared/frase.model';
import { FRASES } from './frases.mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrl: './painel.component.css'
})
export class PainelComponent {
  public instrucao: string = "Traduza a frase"; //Texto String interpolation

  public resposta: string = "";
  public rodada: number = 0;
  public rodadaFrase: Frase;

  public progresso: number = 0;
  
  public frases: Frase[] = FRASES;

  constructor(){
    this.atualizarRodada()
  }

  public atualizarResposta(resposta:Event): void{
    this.resposta = ((<HTMLInputElement>resposta.target).value);
  }

  public verificarResposta(){

    if(this.rodadaFrase.frasePtBr == this.resposta){

      //Trocar pergunta da rodada
      this.rodada ++;

      //progresso
      this.progresso = this.progresso + (100 / this.frases.length);

      //Atualiza o objeto rodadaFrase
      this.atualizarRodada();

      alert("Tradução está correta");
    }

    else{
      alert("Tradução está errada")
    }

  }

  public atualizarRodada(): void{
    this.rodadaFrase = this.frases[this.rodada];
    this.resposta = "";
  }

}
