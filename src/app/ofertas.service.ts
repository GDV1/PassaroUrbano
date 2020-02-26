import { Oferta } from './shared/oferta.model';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class OfertasService {

    constructor(private http: HttpClient) {}

    public getOfertas(): Promise<Oferta[]> {
        return this.http.get('http://localhost:3000/ofertas?destaque=true')
        .toPromise()
        .then((resposta: any) => resposta);
    }

    // public ofertas: Oferta[] = [
    //     {
    //         id: 1,
    //         categoria: 'restaurante',
    //         titulo: 'Super Burger',
    //         descricao_oferta: 'Rodízio de Mini-hambúrger com opção de entrada.',
    //         anunciante: 'Original Burger',
    //         valor: 29.90,
    //         destaque: true,
    //         imagens: [
    //             { url: '/assets/ofertas/1/img1.jpg' },
    //             { url: '/assets/ofertas/1/img2.jpg' },
    //             { url: '/assets/ofertas/1/img3.jpg' },
    //             { url: '/assets/ofertas/1/img4.jpg' }
    //         ]
    //     },
    //     {
    //         id: 2,
    //         categoria: 'restaurante',
    //         titulo: 'Cozinha Mexicana',
    //         descricao_oferta: 'Almoço ou Jantar com Rodízio Mexicano delicioso.',
    //         anunciante: 'Mexicana',
    //         valor: 32.90,
    //         destaque: true,
    //         imagens: [
    //             { url: '/assets/ofertas/2/img1.jpg' },
    //             { url: '/assets/ofertas/2/img2.jpg' },
    //             { url: '/assets/ofertas/2/img3.jpg' },
    //             { url: '/assets/ofertas/2/img4.jpg' }
    //         ]

    //     },
    //     {
    //         id: 4,
    //         categoria: 'diversao',
    //         titulo: 'Estância das águas',
    //         descricao_oferta: 'Diversão garantida com piscinas, trilhas e muito mais.',
    //         anunciante: 'Estância das águas',
    //         valor: 31.90,
    //         destaque: true,
    //         imagens: [
    //             { url: '/assets/ofertas/3/img1.jpg' },
    //             { url: '/assets/ofertas/3/img2.jpg' },
    //             { url: '/assets/ofertas/3/img3.jpg' },
    //             { url: '/assets/ofertas/3/img4.jpg' },
    //             { url: '/assets/ofertas/3/img5.jpg' },
    //             { url: '/assets/ofertas/3/img6.jpg' }
    //         ]
    //     }
    // ];


    // public getOfertas(): Array<Oferta> {
    //     return this.ofertas;
    // }

    // public getOfertasPorCategoria(categoria: string): Promise<Oferta> {

    // }
}
