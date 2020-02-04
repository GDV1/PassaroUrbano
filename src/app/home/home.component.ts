import { Component, OnInit } from '@angular/core';
import { Oferta } from '../shared/oferta.model';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService],
})
export class HomeComponent implements OnInit {

  public ofertas: Oferta[];

  constructor(
    private ofertasService: OfertasService,
  ) { }

  ngOnInit() {
    // this.ofertas = this.ofertasService.getOfertas();

    this.ofertasService.getOfertas2()
    .then((ofertas: Oferta[]) => {
      console.log('A função foi resolvida depois de 3s')
      this.ofertas = ofertas;
    })
    .catch((param: any) => {
      console.log(param);
    });
  }

}
