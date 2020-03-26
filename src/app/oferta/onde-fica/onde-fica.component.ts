import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OfertasService } from 'src/app/ofertas.service';

@Component({
  selector: 'app-onde-fica',
  templateUrl: './onde-fica.component.html',
  styleUrls: ['./onde-fica.component.css']
})
export class OndeFicaComponent implements OnInit {

  public ondeFica: string = '';

  constructor(
    private route: ActivatedRoute,
    private ofertasService: OfertasService
  ) { }

  parametro = this.route.parent.snapshot.params['id'];

  // Alimenta detalhes da oferta
  obterDetalhesPorId(parametro: number) {
    this.ofertasService.OndeFica(parametro)
    .subscribe((dados: string) => this.ondeFica = dados);
  }

  ngOnInit() { this.obterDetalhesPorId(this.parametro); }

}
