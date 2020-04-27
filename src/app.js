//require global functions
require('./chat/sendChat.js');

import FirebaseEvents from './Firebase/FirebaseEvents';

function start(){
    console.log("AVAILABLE!");
    let firebaseEvents = new FirebaseEvents();
    firebaseEvents.initChatEvents();
}
console.log("START!");
function whenAvailable(name, callback) {
    var interval = 10; // ms
    window.setTimeout(function() {
        if (window[name]) {
            callback(window[name]);
        } else {
            window.setTimeout(whenAvailable.bind(null, name, callback), interval);
        }
    }, interval);
}

whenAvailable('currentPlayer', start);

//players
//characters
///char-attribs/char/-LqNL6ygV93sW5RdFI7C/-M5HluzGebUmm730-7id

// Backbone.sync = function(e, n, s) {
//     if (n.nofirebase)
//         return o(e, n, s);
//     if (r(),
//     typeof Firebase === t)
//         return !1;
//     s || (s = {});
//     try {
//         var l = a(n, "url")
//     } catch (d) {
//         return void console.log("No url, probably already deleted.")
//     }
//     var c = new Firebase(i + l)
//       , u = !0;
//     switch (n.collection === t && (u = !1),
//     e) {
//     case "read":
//         c.once("value", function(e) {
//             e = _.toArray(e.val()),
//             s.success && s.success(e, "success", {})
//         });
//         break;
//     case "create":
//     case "update":
//         (new Date).getTime();
//         c.once("value", function(e) {
//             var i = e.val();
//             null == i && (i = {},
//             n.persisted = !0);
//             var o = n.toJSON()
//               , r = {};
//             for (var a in o)
//                 if (i[a] === t)
//                     o[a] !== n.defaults[a] && (r[a] = o[a]);
//                 else if (window.is_gm && u && o[a] === n.defaults[a])
//                     r[a] = null;
//                 else if (i[a] !== o[a]) {
//                     if ("object" == typeof o[a] && _.isEqual(i[a], o[a]))
//                         continue;
//                     r[a] = o[a]
//                 }
//             _.keys(r).length > 0 && (n._ignore_remote = !0,
//             c.update(r, function(e) {
//                 !e && s.success ? s.success() : e && s.error && s.error()
//             }),
//             n._ignore_remote = !1)
//         }, function() {
//             "tutorial" !== window.GNTKN ? (console.log("ERROR: UNABLE TO READ OR SET DATA"),
//             alert("Unable to read or set data from server. There may be a problem with your session. Try reloading the page to fix this issue. If you are persistently receiving this error, please contact your ISP for support.")) : s.success && s.success()
//         });
//         break;
//     case "delete":
//         c.remove(function(e) {
//             !e && s.success ? s.success() : e && s.error && s.error()
//         })
//     }
//     return c
// }
// ;
// var a = function(e, t) {
//     return e && e[t] ? _.isFunction(e[t]) ? e[t]() : e[t] : null
// };
// e.BackboneFirebase = n
// }("undefined" != typeof exports ? exports : this),