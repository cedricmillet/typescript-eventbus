import { Event } from "../src";

describe('Event', () => {

    it('Create an Event', () => {
        const eventName = 'EV_01'
        const event = new Event(eventName);
        expect(event).toBeInstanceOf(Event);
        expect(event.getName()).toStrictEqual(eventName);
    })

    it('Attach an event handler', (done) => {
        const event = new Event('event');
        const data = 'event data as simple string';

        event.addHandler((receivedData:any) => {
            expect(receivedData).toEqual(data);
            done();
        })
        event.post(data);
    })

    it('Single post() call should trigger ALL handlers', () => {
        const event = new Event('event')
        const callback1 = jest.fn().mockReturnThis();
        const callback2 = jest.fn().mockReturnThis();
        const callback3 = jest.fn().mockReturnThis();
        event   .addHandler(callback1)
                .addHandler(callback2)
                .addHandler(callback3)
                .post('payload');
        expect(callback1).toHaveBeenCalledTimes(1);
        expect(callback2).toHaveBeenCalledTimes(1);
        expect(callback3).toHaveBeenCalledTimes(1);
    })

    it('post() correctly emit any type of payload (string, number...)', () => {
        const event = new Event('event');
        const dataSet = [
            'string',
            {object: 'value', secondKey: {nested: true}},
            12345,
            -13456,
            null,
            undefined,
            ["an", "array"],
        ]
        const callback = jest.fn().mockReturnThis();
        event.addHandler(callback);
        for(const data of dataSet) {
            event.post(data);
        }

        for(const data of dataSet) {
            expect(callback).toHaveBeenCalledWith(data);
        }

        expect(callback).toHaveBeenCalledTimes(dataSet.length);
    })

})