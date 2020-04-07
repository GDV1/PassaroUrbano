import { Component, OnInit } from '@angular/core';
import { OrdemCompraService } from '../ordem-compra.service';
import { Pedido } from '../shared/pedido.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CarrinhoService } from '../carinho.service';

@Component({
  selector: 'app-ordem-compra',
  templateUrl: './ordem-compra.component.html',
  styleUrls: ['./ordem-compra.component.css'],
  providers: [ OrdemCompraService, CarrinhoService ]
})
export class OrdemCompraComponent implements OnInit {

  public idPedidoCompra: number = undefined;

  public formulario: FormGroup = new FormGroup({
    'endereco': new FormControl(null, [Validators.required, Validators.minLength(3), Validators.maxLength(120)]),
    'numero': new FormControl(null, [Validators.required, Validators.minLength(1), Validators.maxLength(10)]),
    'complemento': new FormControl(null),
    'formaPagamento': new FormControl(null, [Validators.required]),
  });

  constructor(
    private ordemCompraService: OrdemCompraService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit() {
    console.log(this.carrinhoService.exibirItens());
  }

  public confirmarCompra(): void {
    let pedido: Pedido = new Pedido(
      undefined,
      this.formulario.value.endereco,
      this.formulario.value.numero,
      this.formulario.value.complemento,
      this.formulario.value.formaPagamento
    );

    this.ordemCompraService.efetivarCompra(pedido)
      .subscribe((idPedido: number) => {
        this.idPedidoCompra = idPedido;
        console.log(this.idPedidoCompra);
      });
  }
}
