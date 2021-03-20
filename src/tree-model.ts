export interface ITreeModel {
    id: number;
    parrentId: number;
    description: string;
    childrens: TreeModel[];
}

export class TreeModel implements ITreeModel {
    id!: number;
    parrentId!: number;
    description!: string;
    childrens!: TreeModel[];
}