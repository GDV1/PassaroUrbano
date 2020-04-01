import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';
import { detalhesOferta } from 'src/app/shared/detalhesOferta.model';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: detalhesOferta;

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  public parametro;

  ngOnInit() {
    this.route.parent.params.subscribe((parametros: any) => {
      this.parametro = parametros.id;

      this.ofertasService.OndeFica(this.parametro)
      .subscribe(dados => this.ondeFica = dados);
    });
  }
}
