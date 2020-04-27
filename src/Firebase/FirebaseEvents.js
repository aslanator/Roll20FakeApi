import dispatchOnEvent from "../on/dispatchOnEvent";
import d20 from "../d20/d20";
import { GENERAL_MESSAGE_TYPE, ROLLRESULT_MESSAGE_TYPE } from '../chat/const';

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

    async sendToChat(speakingAs, command, callback){
        let message;
        for(let line of command){
            switch(line.type){
                case ROLLRESULT_MESSAGE_TYPE:
                    message = {
                        who: speakingAs,
                        type: line.type,
                        content: line.json,
                        signature: line.signature,
                        avatar: "/users/avatar/161928/30",
                        playerid: window.currentPlayer.id,
                        timestamp: (new Date).getTime()
                    };
                    break;
                case GENERAL_MESSAGE_TYPE:
                    message = {
                        who: speakingAs,
                        type: line.type,
                        content: line.text,
                        avatar: "/users/avatar/161928/30",
                    };
                    break;
            }
    
            let firebaseChat = firebase.child("chat");
            let chatKey = firebaseChat.push().key();
            firebaseChat.child(chatKey).setWithPriority(message, Firebase.ServerValue.TIMESTAMP)
        }
    }
}

export default FirebaseEvents