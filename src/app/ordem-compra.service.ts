import { Pedido } from './shared/pedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class OrdemCompraService {

    private urlApi = 'http://localhost:3000/';

    constructor(private http: HttpClient) {}


    public efetivarCompra(pedido: Pedido): Observable<any> {

        return this.http.post(
            `${this.urlApi}pedidos`,
            JSON.stringify(pedido),
            {headers: { 'Content-type' : 'application/json' }},
        );
    }
}
