import { IDemo } from "../components/typings";

export type DEMO_TYPE = 'create' | 'edit';


export interface IState {
    demos: IDemo[]
}