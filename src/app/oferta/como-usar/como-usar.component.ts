import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';
import { detalhesOferta } from 'src/app/shared/detalhesOferta.model';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: detalhesOferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  public parametro = this.route.parent.snapshot.params.id;

  // Alimenta detalhes da oferta
  obterDetalhesPorId() {
    this.ofertasService.ComoUsar(this.parametro)
    .subscribe(dados => this.comoUsar = dados);
  }

  ngOnInit() {
    this.obterDetalhesPorId();
  }
}