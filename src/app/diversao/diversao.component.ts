// Default imports
import { Component, OnInit } from '@angular/core';

// Service
import { OfertasService } from '../ofertas.service';

// Model
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'app-diversao',
  templateUrl: './diversao.component.html',
  styleUrls: ['./diversao.component.css'],
  providers: [ OfertasService ]
})
export class DiversaoComponent implements OnInit {

  constructor(private ofertasService: OfertasService ) { }

  public ofertas: Oferta[];

  obterDiversao() {
    this.ofertasService.OfertasPorCategoria('diversao').subscribe(dados => this.ofertas = dados);
  }

  ngOnInit() { this.obterDiversao(); }

}
