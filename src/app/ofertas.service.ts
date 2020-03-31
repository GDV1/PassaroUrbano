import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Oferta } from './shared/oferta.model';
import { Observable } from 'rxjs';
import { detalhesOferta } from './shared/detalhesOferta.model';

@Injectable()
export class OfertasService {

    private readonly urlBase = 'http://localhost:3000/';

    constructor(private http: HttpClient) {}

    // Página Home - OK
    OfertasDestaque() {
        const destaque = `${this.urlBase}ofertas?destaque=true`;
        return this.http.get<Oferta[]>(destaque);
    }

    // Página Restaurantes e Diversão - Consulta por categoria - OK
    OfertasPorCategoria(categoria: string) {
        const ofertaPorCategoria = `${this.urlBase}ofertas?categoria=${categoria}`;
        return this.http.get<Oferta[]>(ofertaPorCategoria);
    }

    // Página da Oferta - RETORNA MAS NÃO EXIBE
    OfertasPorId(id: number) {
        const ofertaPorId = `${this.urlBase}ofertas?id=${id}`;
        return this.http.get<Oferta>(ofertaPorId);
    }

    // Como Usar da Oferta por Id - RETORNA MAS NÃO EXIBE
    ComoUsar(id: number) {
        const detalhesPorId = `${this.urlBase}como-usar?id=${id}`;
        return this.http.get<detalhesOferta>(detalhesPorId);
    }

    // Onde Fica da Oferta por Id - RETORNA MAS NÃO EXIBE
    OndeFica(id: number) {
        const detalhesPorId = `${this.urlBase}onde-fica?id=${id}`;
        return this.http.get<detalhesOferta>(detalhesPorId);
    }

    // Método do campo de pesquisa
    // PesquisaOfertas(termo: string) {
    //     return this.http.get(`${this.urlBase}ofertas?descricao_oferta=${termo}`)
    //         .map(dados => console.log(dados));
    // }
}
