// Default imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Services
import { OfertasService } from '../ofertas.service';
import { CarrinhoService } from '../carinho.service';

// Model
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public ofertas: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService,
    private carrinhoService: CarrinhoService
  ) { }

  public parametro;

  ngOnInit() {
    this.route.params.subscribe((parametros: any) => {
      this.parametro = parametros.id;

      this.ofertasService.OfertasPorId(this.parametro)
      .subscribe(dados => this.ofertas = dados);
    });
  }

  public adicionarAoCarrinho(oferta: Oferta): void {
    this.carrinhoService.incluirItem(oferta);
    console.log(this.carrinhoService.exibirItens());
  }
}
