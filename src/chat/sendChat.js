import FirebaseEvent from '../Firebase/FirebaseEvents';
import d20 from '../d20/d20';
import { GENERAL_MESSAGE_TYPE, ROLLRESULT_MESSAGE_TYPE } from './const';

class SendChatHelper {

    getHtmlContentByRollResultJson(rollResult){
        return d20ext.dice_formatter.getHtmlForResult(JSON.parse(rollResult))
    }
    
    async getCommand(input){
        let rollRegexp = new RegExp(/\/((roll)|(r)|(gmroll)|(gr))[ ]+/i);
        let command = $.trim(input);
        if(rollRegexp.test(command)){
            let origRoll = command.replace(rollRegexp, '');
            command = await d20.getRollResults(origRoll);
            command = command.map((item) => {
                item.origRoll = origRoll;
                item.type = ROLLRESULT_MESSAGE_TYPE;
                item.htmlcontent = this.getHtmlContentByRollResultJson(item.json);
                item._fbid = item.key;
                return item;
            });
        }
        else{
            command = {
                text: input,
                type: GENERAL_MESSAGE_TYPE,
            }
            command = [command];
        }
        return command;
    }
}

async function sendChat(speakingAs, input, callback, options) {
    let sendChatHelper = new SendChatHelper();
    let command = await sendChatHelper.getCommand(input);
    let firebaseEvents = new FirebaseEvent();
    return firebaseEvents.sendToChat(speakingAs, command, callback, options);
};



window.sendChat = sendChat;