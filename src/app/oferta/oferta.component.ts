import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-oferta',
  templateUrl: './oferta.component.html',
  styleUrls: ['./oferta.component.css'],
  providers: [ OfertasService ]
})
export class OfertaComponent implements OnInit {

  public oferta: Oferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  public parametro = this.route.snapshot.params['id'];

  // Alimenta a página de oferta
  obterOfertaPorId(parametro: number) {
    this.ofertasService.OfertasPorId(parametro)
    .subscribe(dados => this.oferta = dados);
  }

  ngOnInit() {
    this.obterOfertaPorId(this.parametro);
    console.log(this.obterOfertaPorId(this.parametro));
  }
}
