import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Observable } from 'rxjs/Observable';
import { Oferta } from '../shared/oferta.model';
import { Subject } from 'rxjs';
import '../util/rxjs-extensions';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ]
})
export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  public ofertas2: Oferta[];

  private subjectPesquisa: Subject<string> = new Subject<string>();


  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .debounceTime(1000)
    .distinctUntilChanged()
    .switchMap((termo: string) => {
      console.log('Requisição HTTP: ', termo);

      if (termo.trim() === '') {
        return Observable.of<Oferta[]>([]);
      }
      return this.ofertasService.pesquisaOfertas(termo);
    })
    .catch((erro: any) => {
      console.log(erro);
      return Observable.of<Oferta[]>([]);
    });

    this.ofertas.subscribe((ofertas: Oferta[]) => {
      this.ofertas2 = ofertas;
    });
  }

  public pesquisa(termoBusca: string): void {
    // this.ofertas = this.ofertasService.pesquisaOfertas(termoBusca);

    // this.ofertas.subscribe(
    //   (ofertas: Oferta[]) => console.log(ofertas),
    //   (erro: any) => console.log('Erro', erro.status),
    //   () => console.log('Fluxo de eventos completo')
    // );

    console.log('Caractere: ', termoBusca);
    this.subjectPesquisa.next(termoBusca);

  }
}
