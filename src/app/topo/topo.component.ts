import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable, Subject } from 'rxjs';
import { Oferta } from '../shared/oferta.model';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  // public pesquisa(termoDaBusca: string): void {
  //   console.log('Caracter: ', termoDaBusca);
  //   this.subjectPesquisa.next(termoDaBusca);
  // }

  ngOnInit() {
    // this.ofertas = this.subjectPesquisa
    // .switchMap((termo: string) => {
    //   console.log('Requisição http para a api');
    //   return this.ofertasService.PesquisaOfertas(termo);
    // });

    // this.ofertas.subscribe((ofertas: Oferta[]) => console.log(ofertas));
  }

}
