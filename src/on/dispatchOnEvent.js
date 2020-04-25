let events = {};
function dispatchOnEvent(eventName, ...args){
    if(Array.isArray(events[eventName])){
        for(let callback of events[eventName]){
            if(typeof callback === 'function'){
                callback(...args);
            }
        }
    }
}

function on(eventName, callback){
    if(!Array.isArray(events[eventName]))
        events[eventName] = [];
    events[eventName].push(callback);
}

window.on = on;

export default dispatchOnEvent;