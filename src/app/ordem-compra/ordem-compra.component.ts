// Default imports
import { Component, OnInit } from '@angular/core';
import { UntypedFormGroup, UntypedFormControl, Validators } from '@angular/forms';

// Services
import { CarrinhoService } from '../services/carinho.service';
import { OrdemCompraService } from '../services/ordem-compra.service';

// Models
import { Pedido } from '../shared/pedido.model';
import { ItemCarrinho } from '../shared/item-carrinho.model';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number = undefined;
  public itensCarrinho: ItemCarrinho[] = [];

  public formulario: UntypedFormGroup = new UntypedFormGroup({
    'endereco': new UntypedFormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new UntypedFormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    'complemento': new UntypedFormControl(null),
    'formaPagamento': new UntypedFormControl(null, [Validators.required]),
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    public carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    this.itensCarrinho = this.carrinhoService.exibirItens();
  }

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido(
      undefined,
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento,
      this.carrinhoService.exibirItens(),
    );

    if (this.carrinhoService.exibirItens().length === 0) {
      alert('Você não selecionou nenhum item!');
    } else {
      this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
        this.carrinhoService.limparCarrinho();
      });
    }
  }

  public adicionar(item: ItemCarrinho): void {
    this.carrinhoService.adicionarQuantidade(item);
  }

  public diminuir(item: ItemCarrinho): void {
    this.carrinhoService.diminuiQuantidade(item);
  }
}
