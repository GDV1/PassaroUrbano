import { Component, OnInit } from '@angular/core';

import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-restaurantes',
  templateUrl: './restaurantes.component.html',
  styleUrls: ['./restaurantes.component.css'],
  providers: [ OfertasService ]
})
export class RestaurantesComponent implements OnInit {

  constructor(private ofertasService: OfertasService) { }

  public ofertas: Oferta[];

  ObterRestaurantes() {
    this.ofertasService.OfertasPorCategoria('restaurante')
    .subscribe(dados => this.ofertas = dados);
  }

  ngOnInit() { this.ObterRestaurantes(); }
}
