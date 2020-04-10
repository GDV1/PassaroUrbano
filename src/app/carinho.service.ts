import { ItemCarrinho } from '../app/shared/item-carrinho.model';
import { Oferta } from './shared/oferta.model';

export class CarrinhoService {
    public itens: ItemCarrinho[] = [];

    public exibirItens(): ItemCarrinho[] {
        return this.itens;
    }

    public incluirItem(oferta: Oferta): void {
        let itemCarrinho: ItemCarrinho = new ItemCarrinho(
            oferta.id,
            oferta.imagens[0],
            oferta.titulo,
            oferta.descricaoOferta,
            oferta.valor,
            1
        );

        console.log(itemCarrinho);
    }
}
