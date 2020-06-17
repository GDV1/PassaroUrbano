// Default imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

// Model
import { Pedido } from './shared/pedido.model';

// RxJS
import { Observable } from 'rxjs/Observable';


@Injectable()
export class OrdemCompraService {

    // Base URL
    private urlApi = 'http://localhost:3000/';

    constructor(private http: HttpClient) {}

    // Method to effect the purchase
    public efetivarCompra(pedido: Pedido): Observable<number> {

        return this.http.post(
            `${this.urlApi}pedidos`,
            JSON.stringify(pedido),
            {headers: { 'Content-type' : 'application/json' }},
        ).map((resposta: Pedido) => resposta.id);
    }
}
