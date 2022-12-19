export interface IEvent {
    readonly name : string;
    getName() : string;
    addHandler() : void;
    post(...data : any[]) : void;
    handlers : ((...params:any[]) => void)[];
}