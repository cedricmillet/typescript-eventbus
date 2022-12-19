import { IEvent } from "./interfaces/Event.interface";

export class Event implements IEvent<Event> {
    /**
     * Event Name
     */
    private readonly name : string;

    /**
     * Handlers list (subscribers)
     */
    private handlers : ((...params:any[]) => void)[] = [];

    constructor(name:string) {
        this.name = name;
    }
    
    public addHandler(handler: any): Event {
        this.handlers.push(handler);
        return this;
    }


    public getName = () : string => this.name;



    public post(...data : any[]) {
        for(const handler of this.handlers) {
            handler(...data);
        }
    }
}