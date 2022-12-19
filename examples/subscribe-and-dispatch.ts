import {EventBus} from "../src";

const eventBus = new EventBus();
const eventName = "onUserConnected";

eventBus.register(eventName);  //  ...not really mandatory to register

//  Simple subscription by event key
eventBus.subscribe(eventName, (...params:any[]) => {
    console.log(`DISPATCH: `, ...params);
});

//  Broadcast values to subscribers
eventBus.dispatch(eventName, "This is event dispatch #1");
eventBus.dispatch(eventName, "This is event dispatch #2");
eventBus.dispatch(eventName, "This is event dispatch #3");