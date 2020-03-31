import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Oferta } from './shared/oferta.model';
import { detalhesOferta } from './shared/detalhesOferta.model';
import 'rxjs-compat/add/operator/map';

@Injectable()
export class OfertasService {

    private readonly urlBase = 'http://localhost:3000/';

    constructor(private http: HttpClient) {}

    // Página Home
    OfertasDestaque() {
        const destaque = `${this.urlBase}ofertas?destaque=true`;
        return this.http.get<Oferta[]>(destaque);
    }

    // Página Restaurantes e Diversão
    OfertasPorCategoria(categoria: string) {
        const ofertaPorCategoria = `${this.urlBase}ofertas?categoria=${categoria}`;
        return this.http.get<Oferta[]>(ofertaPorCategoria);
    }

    // Página da Oferta
    OfertasPorId(id: number) {
        const ofertaPorId = `${this.urlBase}ofertas?id=${id}`;
        return this.http.get<Oferta>(ofertaPorId);
    }

    // Como Usar da Oferta por Id
    ComoUsar(id: number) {
        const detalhesPorId = `${this.urlBase}como-usar?id=${id}`;
        return this.http.get<detalhesOferta>(detalhesPorId);
    }

    // Onde Fica da Oferta por Id
    OndeFica(id: number) {
        const detalhesPorId = `${this.urlBase}onde-fica?id=${id}`;
        return this.http.get<detalhesOferta>(detalhesPorId);
    }
}
