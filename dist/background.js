chrome.webRequest.onBeforeRequest.addListener(
    function(details) {
        console.log(details.url);
        if(  details.url.indexOf('tutorial_tips') !== -1){
            sendApp(details.url);
            return { cancel: true };
        }
    },
    {urls: ["*://app.roll20.net/*.js*"]},
    ["blocking"]);

function sendApp(url){
    setTimeout(() => {    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {data: url});
    });}, 3000);
}