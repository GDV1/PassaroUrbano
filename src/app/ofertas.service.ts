import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Oferta } from './shared/oferta.model';

@Injectable()
export class OfertasService {

    private url_api = 'http://localhost:3000/ofertas?';

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get(`${this.url_api}destaque=true`)
        .toPromise()
        .then((resposta: any) => resposta);
    }

    public getOfertasPorCategoria(categoria: string): Promise<Oferta[]> {
        return this.http.get(`${this.url_api}categoria=${categoria}`)
        .toPromise()
        .then((resposta: any) => resposta);
    }

    public getOfertaPorId(id: number): Promise<Oferta> {
        return this.http.get(`${this.url_api}categoria=${id}`)
        .toPromise()
        .then((resposta: any) => {
            return resposta.shift();
        });
    }
}
