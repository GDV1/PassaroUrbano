import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  // Atributos para recuperação dos valores inseridos no formulário
  public endereco = '';
  public numero = '';
  public complemento = '';
  public formaPagamento = '';

  // Atributos para validação do formulário
  public enderecoValido;
  public numeroValido;
  public complementoValido;
  public formaPagamentoValido;

  // Atributos para estados primitivos dos campos (pristine)
  public enderecoPrimitivo = true;
  public numeroPrimitivo = true;
  public complementoPrimitivo = true;
  public pagamentoPrimitivo = true;

  // Controla o botão de confirmação da compra
  public formEstado = 'disabled';

  // Atributo para controle do Pedido
  public pedido: Pedido = new Pedido(undefined, '', '', '', '');
  public idPedidoCompra: number;

  constructor(private ordemCompraService: OrdemCompraService) { }

  ngOnInit(): void { }

  public atualizaEndereco(endereco: string): void {
    this.endereco = endereco;

    this.enderecoPrimitivo = false;

    if (this.endereco.length > 3) {
      this.enderecoValido = true;
    } else {
      this.enderecoValido = false;
    }

    this.habilitaForm();
  }

  public atualizaNumero(numero: string): void {
    this.numero = numero;

    this.numeroPrimitivo = false;

    if (this.numero.length > 0) {
      this.numeroValido = true;
    } else {
      this.numeroValido = false;
    }

    this.habilitaForm();
  }

  public atualizaComplemento(complemento: string): void {
    this.complemento = complemento;

    this.complementoPrimitivo = false;

    if (this.complemento.length > 0) {
      this.complementoValido = true;
    } else {
      this.complementoValido = false;
    }

    this.habilitaForm();
  }

  public atualizaPagamento(pagamento: string): void {
    this.formaPagamento = pagamento;

    this.pagamentoPrimitivo = false;

    if (this.formaPagamento.length > 0) {
      this.formaPagamentoValido = true;
    } else {
      this.formaPagamentoValido = false;
    }

    this.habilitaForm();
  }

  public habilitaForm(): void {
    if (this.enderecoValido === true && this.numeroValido === true && this.formaPagamentoValido === true) {
      this.formEstado = '';
    } else {
      this.formEstado = 'disabled';
    }
  }

  public confirmarCompra(): void {
    this.pedido.endereco = this.endereco;
    this.pedido.numero = this.numero;
    this.pedido.complemento = this.complemento;
    this.pedido.formaPagamento = this.formaPagamento;

    this.ordemCompraService.efetivarCompra(this.pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
      });
  }
}
