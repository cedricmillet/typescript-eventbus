export interface IEventBus {
    subscribe(eventName:string, callback:any) : void;
    dispatch(eventName:string, ...data:any[]) : void;
    register(eventName:string) : void;
    clear() : void;
}