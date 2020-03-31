import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
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
    private ofertasService: OfertasService
  ) { }

  public parametro = this.route.snapshot.params.id;

  // Alimenta a página de oferta
  obterOferta() {
    this.ofertasService.OfertasPorId(this.parametro)
    .subscribe(dados => this.ofertas = dados);
  }

  ngOnInit() {
    this.obterOferta();
  }
}
