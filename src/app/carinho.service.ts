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

        // Verifica se o item já existe no vetor de itens do carrinho
        let itemEncontrado = this.itens.find((item: ItemCarrinho) =>
            item.id === itemCarrinho.id
        );

        if (itemEncontrado) {
            itemEncontrado.quantidade = itemEncontrado.quantidade + 1;
        } else {
            this.itens.push(itemCarrinho);
        }
    }

    public totalCarrinhoCompras(): number {
        let total: number = 0;

        this.itens.map((item: ItemCarrinho) => {
            total = total + (item.valor * item.quantidade);
        });

        return total;
    }

    public adicionarQuantidade(itemCarrinho: ItemCarrinho): void {
        let encontrado = this.itens.find((item: ItemCarrinho) =>
            item.id === itemCarrinho.id
        );

        if (encontrado) {
            encontrado.quantidade = encontrado.quantidade + 1;
        }
    }

    public diminuiQuantidade(itemCarrinho: ItemCarrinho): void {
        let encontrado = this.itens.find((item: ItemCarrinho) =>
            item.id === itemCarrinho.id
        );

        if (encontrado) {
            encontrado.quantidade = encontrado.quantidade - 1;
        
            if (encontrado.quantidade === 0) {
                this.itens.splice(this.itens.indexOf(encontrado), 1);
            }
        }
    }
}
