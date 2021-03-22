export interface ITreeModel {
    id: number;
    parentId: number;
    description: string;
    children: TreeModel[];
}

export class TreeModel implements ITreeModel {
    id!: number;
    parentId!: number;
    description!: string;
    children!: TreeModel[];
}