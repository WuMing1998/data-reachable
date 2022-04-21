export const STATUS = ['private', 'public'] as const;

export type STATUS_TYPE = typeof STATUS;

export interface IDemo {
    id: number;
    name: string,
    state: typeof STATUS[number]
    Logo: string
    members: IMember[]
}

export type IDemoKey = keyof IDemo

export const PERMISSIONS = ['edit', 'insert', 'delete', 'select', 'owner'] as const;

export type PERMISSIONS_TYPE = typeof PERMISSIONS;

export interface IMember {
    id: number;
    name: string;
    Email: string;
    permission: typeof PERMISSIONS[number]
}

export type IMemberKey = keyof IMember


