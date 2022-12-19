import { IEventBus } from "./interfaces/EventBus.interface";
import { Event } from "./Event";

/**
 * EventBus
 */
export class EventBus implements IEventBus {

    private events = new Map<string, Event>();

    constructor() {}

    /**
     * Subscribe to event by event name
     * @param eventName target event name
     * @param callback event handler
     * @returns 
     */
    public subscribe(eventName:string, callback:any) : void {
        const event = this.getEventByName(eventName)
        
        //  If event is not yet created, then register it by name
        if(event === undefined) {
            this.register(eventName);
            return this.subscribe(eventName, callback);
        }

        event.addHandler(callback);
    }

    /**
     * Post data to event by name
     * @param eventName 
     * @param data 
     * @returns 
     */
    public dispatch(eventName:string, ...data:any[]) : void {
        const event = this.getEventByName(eventName);

        //  If event is not yet created, then register it by name
        if(event === undefined) {
            this.register(eventName);
            return this.dispatch(eventName, ...data);
        }

        event.post(...data);
    }

    /**
     * Register new event
     * @param eventName 
     */
    public register(eventName:string) : this {
        const event = new Event(eventName);
        this.events.set(eventName, event);
        return this;
    }

    /**
     * Clear whole event bus
     */
    public clear() : void {
        this.events.clear();
    }

    private getEventByName(eventName:string) : Event|undefined {
        return this.events.get(eventName);
    }
}

