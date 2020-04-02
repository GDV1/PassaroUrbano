import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css']
})
export class OrdemCompraComponent implements OnInit {

  public endereco = '';
  public numero = '';
  public complemento = '';
  public formaPagamento = '';

  constructor() { }

  ngOnInit(): void {
  }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;
    console.log(this.endereco);
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;
    console.log(this.numero);
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;
    console.log(this.complemento);
  }

  public atualizaPagamento(pagamento: string): void {
    this.formaPagamento = pagamento;
    console.log(this.formaPagamento);
  }
}
