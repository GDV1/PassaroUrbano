export class Pedido {
    constructor(
        public id: number,
        public endereco: string,
        public numero: string,
        public complemento: string,
        public formaPagamento: string
    ) {}
}
