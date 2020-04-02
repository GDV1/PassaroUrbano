import { Pedido } from './shared/pedido.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class OrdemCompraService {

    constructor(private http: HttpClient) {}

    public efetivarCompra(pedido: Pedido): void {
        console.log(pedido);
    }
}
