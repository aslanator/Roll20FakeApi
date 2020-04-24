console.log("START!");
var button = document.querySelector('#textchat-input .btn');
var textarea = document.querySelector('#textchat-input textarea');
var event = new CustomEvent('chat:message', {value: 1000});
document.addEventListener('chat:message', function (e) { console.log(e); }, false);
console.log("END");
let onListeners = {};
const on = (event, func) => {
    if(typeof onListeners[event] === 'undefined')
        onListeners[event] = [];

    onListeners[event].push(func);
}

const fire = (event, ...args) => {
    for(let key of onListeners[event]){
        key(...args);
    }
}

if('undefined' !== typeof button && button !== null)
    button.addEventListener('click', function(){
        let text = button.parentNode.querySelector('textarea').value;
        fire("chat:message", text);
    });

on("chat:message", function(msg){
    console.warn('MSG', msg);
});