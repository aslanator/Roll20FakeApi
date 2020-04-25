import dispatchOnEvent from "../on/dispatchOnEvent";

let firebase;

class FirebaseEvents {

    constructor(){
        if(typeof firebase === 'undefined')
            firebase = new Firebase(window.FIREBASE_ROOT + window.campaign_storage_path + "/");
    }

    initChatEvents(){
        let firebaseChat = firebase.child("chat");
        let firebaseChatListener = firebaseChat.limitToLast(100);
        firebaseChatListener.on('child_added', event => {
            dispatchOnEvent('chat:message', event.val());
        });
    }

    sendToChat(){
        let message = {
            avatar: "/users/avatar/161928/30",
            content: "/r 3d6",
            inlinerolls: [],
            playerid: "-LqNI8VgrmhbnpFUiH-8",
            type: "general",
            who: "Аслан (GM)",
        };
        let firebaseChat = firebase.child("chat");
        let chatKey = firebaseChat.push().key();
        firebaseChat.child(chatKey).setWithPriority(message, Firebase.ServerValue.TIMESTAMP)
    }
}

export default FirebaseEvents