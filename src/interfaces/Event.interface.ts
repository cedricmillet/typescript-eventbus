export interface IEvent<T> {
    getName() : string;
    addHandler(handler:any) : T;
    post(...data : any[]) : void;
    
    // Private properties...
    // readonly name : string;
    // handlers : ((...params:any[]) => void)[];
}