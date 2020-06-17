// Default imports
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

// Service
import { OfertasService } from 'src/app/ofertas.service';

// Model
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

  public parametro;


  ngOnInit() {
    this.route.parent.params.subscribe((parametros: any) => {
      this.parametro = parametros.id;

      this.ofertasService.ComoUsar(this.parametro)
      .subscribe(dados => this.comoUsar = dados);
    });
  }
}
