import { IDemo } from "../components/typings";

export type DEMO_TYPE = 'search' | 'create' | 'edit';

export interface IState {
    demos: IDemo[]
}