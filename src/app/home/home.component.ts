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
    this.ofertas = this.ofertasService.getOfertas();
    console.log(this.ofertas);
  }

}
