import { EventBus } from "../src";

describe('EventBus', () => {

    it('Able to subscribe and dispatch event', (done) => {
        const eventBus = new EventBus();
        const [eventName, eventValue] = ["TOTO", "1234"]

        eventBus.register(eventName);
        eventBus.subscribe(eventName, (...values:any[]) => {
            expect(Array.isArray(values)).toBeTruthy();
            expect(values.length).toEqual(1);
            expect(values[0]).toEqual(eventValue);
            done()
        });

        eventBus.dispatch(eventName, eventValue);
    });

    it('register() method is not mandatory to subscribe and dispatch an event', (done) => {
        const eventBus = new EventBus();
        const [eventName, eventValue] = ["TITI", "1234"]

        eventBus.subscribe(eventName, (receivedData:string) => {
            expect(receivedData).toEqual(eventValue);
            done()
        });

        eventBus.dispatch(eventName, eventValue);
    });

});