export class MachineCategory {
    constructor(
        public CatId: number,
        public CatName: string
    ) {}
}

export const Categories: Array<MachineCategory> = new Array<MachineCategory>();
Categories.push(new MachineCategory(101, 'Electronics'));
Categories.push(new MachineCategory(102, 'Electrical'));
Categories.push(new MachineCategory(103, 'Mechanical'));