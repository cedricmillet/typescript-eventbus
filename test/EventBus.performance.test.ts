import { EventBus } from "../src";

describe('EventBus Performanche benchmark', () => {

    it('Should be able to correctly subscribe() and dispatch() 10.000 events', () => {
        
        const eventBus = new EventBus();
        const tryCount = 10000;

        for(let i=0;i<tryCount; i++) {
            eventBus.subscribe(`ev_${i}`, (receivedValue:any) => {
                expect(receivedValue).toEqual(i);
            });
            
            eventBus.dispatch(`ev_${i}`, i);
        }
    });



})