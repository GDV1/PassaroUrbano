import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-como-usar',
  templateUrl: './como-usar.component.html',
  styleUrls: ['./como-usar.component.css'],
  providers: [ OfertasService ]
})
export class ComoUsarComponent implements OnInit {

  public comoUsar: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  parametro = this.route.parent.snapshot.params['id'];

  // Alimenta detalhes da oferta
  obterDetalhesPorId(parametro: number) {
    this.ofertasService.ComoUsar(parametro)
    .subscribe((dados: string) => this.comoUsar = dados);
  }

  ngOnInit() { this.obterDetalhesPorId(this.parametro); }

}
