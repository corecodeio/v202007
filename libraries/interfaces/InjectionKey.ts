import { IDependiecies } from "../di/iDependecies";
import { InjectionKeyScope } from "./InjectionKeyScope";


export interface InjectionKey<T> {
    name: string;
    scope: InjectionKeyScope;
    clousure: (dependencies: IDependiecies) => T;
}