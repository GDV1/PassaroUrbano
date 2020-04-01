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

  public parametro;

  ngOnInit() {
    this.route.params.subscribe((parametros: any) => {
      this.parametro = parametros.id;

      this.ofertasService.OfertasPorId(this.parametro)
      .subscribe(dados => this.ofertas = dados);
    });
  }
}
