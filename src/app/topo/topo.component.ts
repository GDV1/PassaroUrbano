// Default imports
import { Component, OnInit } from '@angular/core';

// Services
import { OfertasService } from '../ofertas.service';

// Model
import { Oferta } from '../shared/oferta.model';

// RxJS
import { Observable } from 'rxjs/Observable';
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
  private subjectPesquisa: Subject<string> = new Subject<string>();

  constructor(private ofertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.subjectPesquisa
    .debounceTime(750)
    .distinctUntilChanged()
    .switchMap((termo: string) => {
      if (termo.trim() === '') {
        return Observable.of<Oferta[]>([]);
      }
      return this.ofertasService.pesquisaOfertas(termo);
    })
    .catch((erro: any) => {
      return Observable.of<Oferta[]>([]);
    });
  }

  public pesquisa(termoBusca: string): void {
    this.subjectPesquisa.next(termoBusca);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }
}
