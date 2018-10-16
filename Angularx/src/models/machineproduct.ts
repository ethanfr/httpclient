export class MachineProduct {
    constructor(
        public ProdId: number,
        public ProdName: string,
        public CatId: number
    ) {}
}


export const Products: Array<MachineProduct> = new Array<MachineProduct>();

Products.push(new MachineProduct(10001, 'Laptop', 101));
Products.push(new MachineProduct(10002, 'Router', 101));
Products.push(new MachineProduct(10003, 'Iron', 102));
Products.push(new MachineProduct(10004, 'Mixer', 102));
Products.push(new MachineProduct(10005, 'Crane', 103));
Products.push(new MachineProduct(10006, 'Drilling Machine', 103));
