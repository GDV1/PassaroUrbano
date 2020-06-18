// Default imports
import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

// Services
import { OfertasService } from '../ofertas.service';

// Model
import { Oferta } from '../shared/oferta.model';
import { Image } from '../shared/image.model';

// RxJS
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs';
import '../util/rxjs-extensions';

@Component({
  selector: 'app-topo',
  templateUrl: './topo.component.html',
  styleUrls: ['./topo.component.css'],
  providers: [ OfertasService ],
  animations: [
    trigger('banner', [
      state('hide', style({
        opacity: 0
      })),
      state('show', style({
        opacity: 1
      })),
      transition('hide <=> show', animate('5s ease-in'))
    ])
  ]
})

export class TopoComponent implements OnInit {

  public ofertas: Observable<Oferta[]>;
  private subjectPesquisa: Subject<string> = new Subject<string>();

  public state = 'hide';

  public images: Image[] = [
    {state: 'show', url: '/assets/banners/img_1.jpg'},
    {state: 'hide', url: '/assets/banners/img_2.jpg'},
    {state: 'hide', url: '/assets/banners/img_3.jpg'},
    {state: 'hide', url: '/assets/banners/img_4.jpg'},
  ];

  constructor(private ofertasService: OfertasService) { }

  // Methods for animate banner
  public toggleState(): void {
    this.state = (this.state === 'show' ? 'hide' : 'show');
  }

  public rotate() {
    let idx: number;

    for (let i = 0; i <= 3 ; i++) {
      if (this.images[i].state === 'show') {
        this.images[i].state = 'hide';

        idx = i === 3 ? 0 : (i + 1);

        break;
      }
    }

    this.images[idx].state = 'show';

    setTimeout(() => this.rotate(), 5000);
  }


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

    setTimeout(() => this.rotate(), 3000);
  }

  public pesquisa(termoBusca: string): void {
    this.subjectPesquisa.next(termoBusca);
  }

  public limpaPesquisa(): void {
    this.subjectPesquisa.next('');
  }
}
