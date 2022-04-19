export interface IMember {
    id: number;
    name: string;
    Email: string;
    permissions: permission
}

export interface IDemo {
    id: number;
    name: string,
    state: "private" | "public";
    members: IMember[]
}

export type permission = 'edit' | 'insert' | 'delete' | 'select' | 'owner';

